import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideNav from "../navigation/SideNav";
import { Container, Main, OutletWrapper } from "./sytle";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { clearAlertMessage } from "@/store/alert";
import { useTheme } from "@/contexts/ThemeContext";

const AppLayout = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const alertMessage = useSelector(
    (state: RootState) => state.alert.alertMessage
  );

  useEffect(() => {
    if (alertMessage === "") return;
    toast(alertMessage, { containerId: "alert" });
    dispatch(clearAlertMessage());
  }, [alertMessage, dispatch]);

  return (
    <Container>
      <Header />
      <Main>
        <SideNav />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Main>
      <ToastContainer
        containerId="alert"
        theme={theme}
        autoClose={3000}
        pauseOnHover={false}
        className="toast-container"
      />
    </Container>
  );
};

export default AppLayout;
