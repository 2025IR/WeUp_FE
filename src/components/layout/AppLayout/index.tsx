import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <header>헤더</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
