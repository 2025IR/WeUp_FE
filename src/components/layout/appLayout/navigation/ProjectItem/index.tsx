import { ProjectType } from "@/types/project";
import { ProjectCard } from "./style";
import IconLabel from "@/components/common/IconLabel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useStomp } from "@/contexts/StompContext";
import { useEffect } from "react";
import { incrementAlert, setAlertMessage } from "@/store/alert";
import queryClient from "@/query/reactQueryClient";

type Props = {
  project: ProjectType;
  active: boolean;
  onClick: () => void;
};

const ProjectItem = ({ project, active, onClick }: Props) => {
  // 웹소켓 구독 정보 변경
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const { client, connSeq } = useStomp();
  useEffect(() => {
    if (!client || !client.connected) return;

    const subscription = client.subscribe(
      `/topic/project/${project.projectId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);

        if (newMessage.type === "FINISH") {
          queryClient.invalidateQueries({
            queryKey: ["projectList"],
          });
        } else {
          queryClient.invalidateQueries({
            queryKey: ["memberList", project.projectId],
          });
        }

        dispatch(incrementAlert());
        dispatch(setAlertMessage(newMessage.message));

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
  }, [client?.connected, connSeq]);
  return (
    <ProjectCard key={project.projectId} onClick={onClick} active={active}>
      <IconLabel type="image" icon={project.projectImage}>
        {project.projectName}
      </IconLabel>
    </ProjectCard>
  );
};

export default ProjectItem;
