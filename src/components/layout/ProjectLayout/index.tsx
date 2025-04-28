import { Outlet } from "react-router-dom";
import ProjectHeader from "./Header";

const ProjectLayout = () => {
  return (
    <div>
      <ProjectHeader />
      <nav>네비게이션</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProjectLayout;
