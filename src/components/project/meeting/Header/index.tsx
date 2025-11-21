import { Container, Content, Logo } from "./style";
import logo from "@/assets/logo/logo.png";

const MeetingHeader = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logo" />
          <p>화상회의방</p>
        </Logo>
      </Content>
    </Container>
  );
};

export default MeetingHeader;
