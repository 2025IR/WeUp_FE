import IconLabel from "@/components/common/IconLabel";
import {
  EmailSection,
  GridItem,
  MemberEditButton,
  NameSection,
  PhoneNumberSection,
  RoleSection,
} from "./style";
import Label from "@/components/common/Label";
import { MemberCardProps } from "./type";
import { usePopoverPosition } from "@/hooks/useModalPosition";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { FaCrown } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";

const MemberCard = ({ member, roles, onOpenRoleModal }: MemberCardProps) => {
  const { targetRef, calculatePosition } = usePopoverPosition();
  const roleList = useSelector((state: RootState) => state.role.roles);
  console.log(member);

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
          gap="0.5rem"
          colors="text"
          size="lg"
          full
        >
          {member.name}
        </IconLabel>
        {member.isLeader && <FaCrown />}
      </NameSection>
      <EmailSection>
        <p>{member.email}</p>
      </EmailSection>
      <PhoneNumberSection>{member.phoneNumber}</PhoneNumberSection>
      <RoleSection ref={targetRef}>
        <div onClick={handleClick}>
          {roles.length > 0 ? (
            roles.map((roleId, idx) => {
              const role = roleList.find((r) => r.roleId === roleId);
              return role ? (
                // <Label key={idx} colors={role.roleColor}>
                <Label key={idx} colors={role.roleColor}>
                  {role.roleName}
                </Label>
              ) : null;
            })
          ) : (
            <Label colors="secondary" textColors="text">
              -
            </Label>
          )}
        </div>
      </RoleSection>
      <MemberEditButton className="edit-btn">
        <BiDotsVerticalRounded />
      </MemberEditButton>
    </GridItem>
  );
};

export default MemberCard;
