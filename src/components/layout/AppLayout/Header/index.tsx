import logo_light from "@/assets/logo/logo_light.svg";
import Button from "@/components/common/Button";
import { AiOutlineBell } from "react-icons/ai";
import { Container, Content, Logo, UserInfo, UserSection } from "./style";
// import logo_dark from "@/assets/logo/logo_light.svg";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo_light} alt="logo" />
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
            src="https://pixabay.com/get/ga883c5369a2e4fb6ee4343c04972f15fec8b0a3357f26bb30ce697ca4ce2e6262db674fd27bbe286433358fad1c22d041d18d2fd32d0869e065edbdf4d703b8ee8809a17e0e28dac7387f9b4030c57ed_640.png"
            alt="profile-iamge"
          />
        </UserSection>
      </Content>
    </Container>
  );
};

export default Header;
