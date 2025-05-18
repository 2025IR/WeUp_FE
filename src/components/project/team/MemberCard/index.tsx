import IconLabel from "@/components/common/IconLabel";
import { GridItem, RoleSection, StartItem } from "./style";
import Label from "@/components/common/Label";
import { MemberCardProps } from "./type";
import { usePopoverPosition } from "@/hooks/useModalPosition";

const MemberCard = ({ member, onOpenRoleModal }: MemberCardProps) => {
  const { targetRef, calculatePosition } = usePopoverPosition();

  const handleClick = () => {
    const pos = calculatePosition();
    if (pos) {
      onOpenRoleModal(member.member_id, pos);
    }
  };
  return (
    <GridItem key={member.member_id}>
      <StartItem>
        <IconLabel
          icon={member.profile_image}
          type="image"
          gap="1rem"
          colors="text"
          size="lg"
        >
          {member.nickname}
        </IconLabel>
      </StartItem>
      <div>{member.email}</div>
      <div>{member.phone_number}</div>
      <RoleSection ref={targetRef} onClick={handleClick}>
        <Label>{member.role_name}</Label>
      </RoleSection>
    </GridItem>
  );
};

export default MemberCard;
