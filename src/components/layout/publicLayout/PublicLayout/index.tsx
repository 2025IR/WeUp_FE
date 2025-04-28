import { Outlet } from "react-router-dom";
import PublicHeader from "../Header";

const PublicLayout = () => {
  return (
    <div>
      <PublicHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
