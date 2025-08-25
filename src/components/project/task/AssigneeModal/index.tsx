import { useGetMembers } from "@/query/team/useGetMember";
import { TodoType, TodoUpdateType } from "@/types/todo";
import { Container, MemberCard } from "./style";
import IconLabel from "@/components/common/IconLabel";
import { BiCheck } from "react-icons/bi";
import { useEffect, useState } from "react";

type Props = {
  projectId: number | null;
  task: TodoType;
  onUpdate: (todoId: number, updated: Partial<TodoUpdateType>) => void;
};

const AssigneeModal = ({ projectId, task, onUpdate }: Props) => {
  const { data: members } = useGetMembers(projectId);
  const [selectedIds, setSelectedIds] = useState<number[]>(
    task.assignee.map((a) => a.memberId)
  );

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? [] : [id]));
  };

  useEffect(() => {
    return () => {
      onUpdate(task.todoId, {
        memberIds: selectedIds,
      });
    };
  }, [selectedIds]);

  return (
    <Container>
      <p>Select People</p>
      <div>
        {members?.map((member) => (
          <MemberCard
            key={member.memberId}
            isSelected={selectedIds.includes(member.memberId)}
            onClick={() => toggleSelect(member.memberId)}
          >
            <IconLabel
              type="image"
              full
              gap="0.5rem"
              icon={member.profileImage}
            >
              {member.name}
            </IconLabel>
            {selectedIds.includes(member.memberId) && <BiCheck />}
          </MemberCard>
        ))}
      </div>
    </Container>
  );
};

export default AssigneeModal;
