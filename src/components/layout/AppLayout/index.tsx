import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./navigation/SideNav";

const AppLayout = () => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <SideNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
