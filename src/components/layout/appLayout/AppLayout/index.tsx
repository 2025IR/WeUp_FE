import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideNav from "../navigation/SideNav";
import { Container, Main, OutletWrapper } from "./sytle";

const AppLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <SideNav />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Main>
    </Container>
  );
};

export default AppLayout;
