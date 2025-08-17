import Button from "@/components/common/Button";
import { AiOutlineBell } from "react-icons/ai";
import {
  AlertCountWrapper,
  Container,
  Content,
  Logo,
  UserInfo,
  UserSection,
} from "./style";
import logo from "@/assets/logo/logo.png";
import { useUserProfile } from "@/query/auth/useUserProfile";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import UserEditModal from "../UserEditModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setAlertCount } from "@/store/alert";

const Header = () => {
  const { data } = useUserProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const unreadAlertCount = useSelector(
    (state: RootState) => state.alert.unreadAlertCount
  );

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  const handleAlertOpen = () => {
    dispatch(setAlertCount(0));
    setIsAlertOpen(true);
  };
  const handleAlertClose = () => setIsAlertOpen(false);

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
            <Button onClick={handleAlertOpen} variant="secondary" iconOnly>
              <AiOutlineBell />
            </Button>
            {unreadAlertCount !== 0 && (
              <AlertCountWrapper>
                <p>{unreadAlertCount}</p>
              </AlertCountWrapper>
            )}
          </UserInfo>

          <img src={data?.profileImage} alt="profile-iamge" />
        </UserSection>
      </Content>

      {data && (
        <UserEditModal isOpen={isModalOpen} onClose={handleClose} user={data} />
      )}
    </Container>
  );
};

export default Header;
