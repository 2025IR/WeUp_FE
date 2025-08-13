import { useGetMembers } from "@/query/team/useGetMember";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { MemberItem, MembersList } from "./style";
import Label from "@/components/common/Label";
import { BiCheckSquare, BiSquare } from "react-icons/bi";

type Props = {
  unselected: number[];
  hovered: number[];
  updateUnselected: (ids: number[]) => void;
};

const ViewSideSection = ({ unselected, hovered, updateUnselected }: Props) => {
  const projectId = useSelector((state: RootState) => state.project.id);

  const { data: membersList } = useGetMembers(projectId);

  // 인원 토글 구현
  const handleToggleUnselected = (id: number) => {
    if (unselected.includes(id)) {
      updateUnselected(unselected.filter((memberId) => memberId !== id));
    } else {
      updateUnselected([...unselected, id]);
    }
  };

  return (
    <MembersList>
      {membersList?.map((member) => {
        const isSelected = !unselected.includes(member.memberId);
        const isHovered = hovered.includes(member.memberId);

        return (
          <MemberItem
            key={member.memberId}
            onClick={() => handleToggleUnselected(member.memberId)}
          >
            {isSelected ? <BiCheckSquare /> : <BiSquare />}
            <Label
              textColors={isHovered ? "textWhite" : "textLight"}
              colors={isHovered ? "primary" : "background"}
            >
              {member.name}
            </Label>
          </MemberItem>
        );
      })}
    </MembersList>
  );
};

export default ViewSideSection;
