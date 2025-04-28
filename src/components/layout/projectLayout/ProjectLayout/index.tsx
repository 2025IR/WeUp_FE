import { Outlet } from "react-router-dom";

const ProjectLayout = () => {
  return (
    <div>
      <nav>네비게이션</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProjectLayout;
