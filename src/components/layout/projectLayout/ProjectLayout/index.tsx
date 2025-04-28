import { Outlet } from "react-router-dom";
import { Container, Main } from "./style";
import ProjectHeader from "../Header";

const ProjectLayout = () => {
  return (
    <Container>
      <ProjectHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default ProjectLayout;
