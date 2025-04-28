import { Outlet } from "react-router-dom";
import { Container, Main } from "./style";

const ProjectLayout = () => {
  return (
    <Container>
      {/* 프로젝트 헤더 */}
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default ProjectLayout;
