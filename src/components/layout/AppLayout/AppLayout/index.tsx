import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideNav from "../navigation/SideNav";
import { Container, Main } from "./sytle";

const AppLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <SideNav />
        <Outlet />
      </Main>
    </Container>
  );
};

export default AppLayout;
