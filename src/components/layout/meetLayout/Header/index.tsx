import Button from "@/components/common/Button";
import IconLabel from "@/components/common/IconLabel";
import { Container, NavWrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";

const Header = () => {
  const location = useLocation();
  const isChat = location.pathname.includes("/chat");
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <IconLabel
          icon={isChat ? <BiChat /> : <BsHeadphones />}
          gap="1rem"
          fontSize="body"
          fontWeight="semibold"
          size="lg"
        >
          {isChat ? "전체 채팅방" : "화상 회의 대기실"}
        </IconLabel>
      </div>
      <NavWrapper>
        <Button
          onClick={() => navigate("chat")}
          size="lg"
          variant={isChat ? "primary" : "secondary"}
        >
          전체 채팅방
        </Button>
        <Button
          onClick={() => navigate("waiting")}
          size="lg"
          variant={isChat ? "secondary" : "primary"}
        >
          화상 회의실
        </Button>
      </NavWrapper>
    </Container>
  );
};

export default Header;
