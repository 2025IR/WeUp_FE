import logo from "@/assets/logo/logo.png";
import Button from "@/components/common/Button";
import { AuthActions, Container, Content, Logo } from "./style";
import { useNavigate } from "react-router-dom";

const PublicHeader = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Logo onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          <p>we:up</p>
        </Logo>

        <AuthActions>
          <Button
            variant="secondary"
            onClick={() => navigate("/auth?mode=login")}
          >
            로그인
          </Button>
          <Button onClick={() => navigate("/auth?mode=signup")}>
            회원가입
          </Button>
        </AuthActions>
      </Content>
    </Container>
  );
};

export default PublicHeader;
