import logo_light from "@/assets/logo/logo_light.svg";
import Button from "@/components/common/Button";
import { AuthActions, Container, Content, Logo } from "./style";
import logo_dark from "@/assets/logo/logo_dark.svg";
import { useTheme } from "@/contexts/ThemeContext";

const PublicHeader = () => {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? logo_light : logo_dark;
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoSrc} alt="logo" />
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
