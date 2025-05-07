import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Container, Main } from "./style";

const MeetLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default MeetLayout;
