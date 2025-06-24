import Button from "@/components/common/Button";
import { AiOutlineBell } from "react-icons/ai";
import { Container, Content, Logo, UserInfo, UserSection } from "./style";
import logo from "@/assets/logo/logo.png";
import { useUserProfile } from "@/query/auth/useUserProfile";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import UserEditModal from "../UserEditModal";

const Header = () => {
  const { data } = useUserProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logo" />
          <p>we:up</p>
        </Logo>

        <UserSection>
          <UserInfo>
            <Button variant="primary">{data?.name}</Button>
            <Button variant="secondary">{data?.email}</Button>
            <Button onClick={handleOpen} variant="secondary" iconOnly>
              <IoMdSettings />
            </Button>
            <Button variant="secondary" iconOnly>
              <AiOutlineBell />
            </Button>
          </UserInfo>

          <img src={data?.profileImage} alt="profile-iamge" />
        </UserSection>
      </Content>

      <UserEditModal isOpen={isModalOpen} onClose={handleClose} />
    </Container>
  );
};

export default Header;
