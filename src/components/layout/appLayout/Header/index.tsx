import logo_light from "@/assets/logo/logo_light.svg";
import Button from "@/components/common/Button";
import { AiOutlineBell } from "react-icons/ai";
import { Container, Content, Logo, UserInfo, UserSection } from "./style";
import logo_dark from "@/assets/logo/logo_dark.svg";
import { useTheme } from "@/contexts/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? logo_light : logo_dark;
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoSrc} alt="logo" />
          <p>we:up</p>
        </Logo>

        <UserSection>
          <UserInfo>
            <Button>yundoll</Button>
            <Button variant="secondary">mar0722@naver.com</Button>
            <Button variant="secondary" iconOnly>
              <AiOutlineBell />
            </Button>
          </UserInfo>

          <img
            src="https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley3.png"
            alt="profile-iamge"
          />
        </UserSection>
      </Content>
    </Container>
  );
};

export default Header;
