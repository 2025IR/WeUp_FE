import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <nav>네비게이션</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
