import { useProjectInfo } from "@/query/project/useProjectInfo";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { BiCheck, BiEditAlt } from "react-icons/bi";
import { StyledButton, StyledTextarea, Wrapper } from "./style";
import { useUpdateDescription } from "@/query/project/useUpdateDescription";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "@/store/project";
import { RootState } from "@/store/store";
import { useStomp } from "@/contexts/StompContext";
import queryClient from "@/query/reactQueryClient";

const Description = () => {
  const projectId = useSelector((state: RootState) => state.project.id);
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const memberId = useSelector((state: RootState) => state.project.memberId);

  const { client, connSeq } = useStomp();
  const [editType, setEditType] = useState<
    "EDIT_LOCK" | "EDIT_UPDATE" | "EDIT_UNLOCK"
  >("EDIT_UNLOCK");
  const [updatedByName, setUpdatedByName] = useState<string>("");

  console.log(editType);

  const [description, setDescription] = useState("");
  useEffect(() => {
    if (!client || !client.connected) return;

    const subscription = client.subscribe(
      `/topic/project/${projectId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);

        if (
          newMessage.type === "EDIT_LOCK" &&
          memberId !== newMessage.memberId
        ) {
          setEditType("EDIT_LOCK");
          setUpdatedByName(newMessage.lockedBy);
          console.log(updatedByName);
        }

        if (
          newMessage.type === "EDIT_UPDATE" &&
          memberId !== newMessage.memberId
        ) {
          if (newMessage.editedBy !== updatedByName) {
            setUpdatedByName(newMessage.editedBy);
          }
          setDescription(JSON.parse(newMessage.description));
          setEditType("EDIT_LOCK");
        }

        if (newMessage.type === "EDIT_UNLOCK") {
          setUpdatedByName("");
          queryClient.invalidateQueries({
            queryKey: ["projectInfo", projectId],
          });
          setEditType("EDIT_UNLOCK");
        }

        console.log("📥 새 메시지 도착:", newMessage);
      },
      {
        Authorization: `${accessToken}`,
      }
    );

    return () => {
      subscription.unsubscribe({
        Authorization: `${accessToken}`,
      });
    };
  }, [client?.connected, projectId, connSeq, accessToken]);

  const { data } = useProjectInfo(projectId);

  const dispatch = useDispatch();
  const project = useSelector((state: RootState) => state.project);

  const mutation = useUpdateDescription();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);

    client?.publish({
      destination: `/app/project/${projectId}/edit/update`,
      body: JSON.stringify(e.target.value),
      headers: {
        Authorization: `${accessToken}`,
      },
    });
  };

  const handleEdit = () => {
    if (editType === "EDIT_LOCK") return;
    if (editType === "EDIT_UNLOCK") {
      client?.publish({
        destination: `/app/project/${projectId}/edit/start`,
        headers: {
          Authorization: `${accessToken}`,
        },
      });
      setEditType("EDIT_UPDATE");
    }
    if (editType === "EDIT_UPDATE") {
      mutation.mutate(
        { projectId, description },
        {
          onSuccess: () => {
            dispatch(setProject({ ...project, description }));
          },
          onError: (err) => {
            console.error("수정 실패", err);
          },
        }
      );
      setEditType("EDIT_UNLOCK");
    }
  };

  useEffect(() => {
    if (data?.description) {
      setDescription(data.description);
    }
  }, [data]);

  useLayoutEffect(() => {
    handleResizeHeight();
  }, [description]);

  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const handleResizeHeight = useCallback((): void => {
    const el = textRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  return (
    <Wrapper isFill={editType === "EDIT_UPDATE"}>
      <StyledTextarea
        ref={textRef}
        value={description}
        onChange={handleChange}
        readOnly={editType !== "EDIT_UPDATE"}
      />
      <StyledButton onClick={handleEdit}>
        {editType === "EDIT_UPDATE" ? (
          <BiCheck />
        ) : editType === "EDIT_UNLOCK" ? (
          <BiEditAlt className="edit_icon" />
        ) : (
          <p>{updatedByName}님이 수정중...</p>
        )}
      </StyledButton>
    </Wrapper>
  );
};

export default Description;
