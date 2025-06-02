import logo from "@/assets/logo/logo.png";
import Button from "@/components/common/Button";
import { AuthActions, Container, Content, Logo } from "./style";

const PublicHeader = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logo" />
          <p>we:up</p>
        </Logo>

        <AuthActions>
          <Button variant="secondary">로그인</Button>
          <Button>회원가입</Button>
        </AuthActions>
      </Content>
    </Container>
  );
};

export default PublicHeader;
