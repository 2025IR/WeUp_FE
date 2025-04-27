import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
