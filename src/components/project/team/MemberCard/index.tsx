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
      onOpenRoleModal(member.memberId, pos);
    }
  };
  return (
    <GridItem key={member.memberId}>
      <StartItem>
        <IconLabel
          icon={member.profileImage}
          type="image"
          gap="1rem"
          colors="text"
          size="lg"
        >
          {member.name}
        </IconLabel>
      </StartItem>
      <div>{member.email}</div>
      <div>{member.phoneNumber}</div>
      <RoleSection ref={targetRef} onClick={handleClick}>
        <Label>{member.roles}</Label>
      </RoleSection>
    </GridItem>
  );
};

export default MemberCard;
