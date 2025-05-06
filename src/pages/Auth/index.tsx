import AuthCard from "@/components/auth/AuthCard.tsx";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const [params, setParams] = useSearchParams();
  const mode = params.get("mode") === "signup" ? "signup" : "login";

  const handleChangeMode = () => {
    setParams({ mode: mode === "login" ? "signup" : "login" });
  };

  return <AuthCard mode={mode} onChangeMode={handleChangeMode} />;
};

export default Auth;
