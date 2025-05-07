import AuthCard from "@/components/auth/AuthCard.tsx";
import { useSearchParams } from "react-router-dom";
import { Container } from "./style";

const Auth = () => {
  const [params, setParams] = useSearchParams();
  const mode = params.get("mode") === "signup" ? "signup" : "login";

  const handleChangeMode = () => {
    setParams({ mode: mode === "login" ? "signup" : "login" });
  };

  return (
    <Container>
      <AuthCard mode={mode} onChangeMode={handleChangeMode} />
    </Container>
  );
};

export default Auth;
