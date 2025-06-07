import Button from "@/components/common/Button";
import { AiOutlineBell } from "react-icons/ai";
import { Container, Content, Logo, UserInfo, UserSection } from "./style";
import logo from "@/assets/logo/logo.png";

const MeetingHeader = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logo" />
          <p>Rumon 화상회의방</p>
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

export default MeetingHeader;
