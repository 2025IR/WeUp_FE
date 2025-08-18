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
import { useEffect, useState } from "react";
import UserEditModal from "../UserEditModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { incrementAlert, setAlertCount } from "@/store/alert";
import AlertModal from "../AlertModal";
import { useStomp } from "@/contexts/StompContext";
import { useGetUnreadCount } from "@/query/alert/useGetUnreadCount";

const Header = () => {
  const { data } = useUserProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { data: serverUnread } = useGetUnreadCount();

  useEffect(() => {
    if (serverUnread) dispatch(setAlertCount(serverUnread));
  }, [serverUnread, dispatch]);

  const unreadAlertCount = useSelector(
    (state: RootState) => state.alert.unreadAlertCount
  );

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  const handleAlertClose = () => setIsAlertOpen(false);

  const toggleAlert = () => {
    if (isAlertOpen === false) {
      dispatch(setAlertCount(0));
      setIsAlertOpen(true);
    } else {
      setIsAlertOpen(false);
    }
  };

  // 웹소켓 구독 정보 변경
  const userId = useSelector((state: RootState) => state.auth.userId);
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const { client, connSeq } = useStomp();
  useEffect(() => {
    if (!client || !client.connected) return;

    const subscription = client.subscribe(
      `/topic/user/${userId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);

        if (!isAlertOpen) {
          dispatch(incrementAlert());
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
  }, [client?.connected, connSeq]);

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
            <Button onClick={toggleAlert} variant="secondary" iconOnly>
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

      {isAlertOpen && <AlertModal onClose={handleAlertClose} />}
    </Container>
  );
};

export default Header;
