import IconLabel from "@/components/common/IconLabel";
import { EmailSection, GridItem, NameSection, RoleSection } from "./style";
import Label from "@/components/common/Label";
import { MemberCardProps } from "./type";
import { usePopoverPosition } from "@/hooks/useModalPosition";

const MemberCard = ({ member, roles, onOpenRoleModal }: MemberCardProps) => {
  const { targetRef, calculatePosition } = usePopoverPosition();

  const handleClick = () => {
    const pos = calculatePosition();
    if (pos) {
      onOpenRoleModal(member.memberId, pos);
    }
  };
  return (
    <GridItem key={member.memberId}>
      <NameSection>
        <IconLabel
          icon={member.profileImage}
          type="image"
          gap="1rem"
          colors="text"
          size="lg"
        >
          {member.name}
        </IconLabel>
      </NameSection>
      <EmailSection>
        <p>{member.email}</p>
      </EmailSection>
      <div>{member.phoneNumber}</div>
      <RoleSection ref={targetRef}>
        <div onClick={handleClick}>
          {roles.length > 0 ? (
            roles.map((role, idx) => <Label key={idx}>{role}</Label>)
          ) : (
            <Label colors="secondary" textColors="text">
              -
            </Label>
          )}
        </div>
      </RoleSection>
    </GridItem>
  );
};

export default MemberCard;
