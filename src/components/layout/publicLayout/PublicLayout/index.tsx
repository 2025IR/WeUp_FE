import { Outlet } from "react-router-dom";
import PublicHeader from "../Header";
import { Container, Main } from "./style";

const PublicLayout = () => {
  return (
    <Container>
      <PublicHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default PublicLayout;
