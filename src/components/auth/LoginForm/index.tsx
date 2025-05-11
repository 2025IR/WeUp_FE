import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { FormContainer } from "./style";
import { useState } from "react";
import { useLoginMutation } from "@/query/auth/useLoginMutation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "@/store/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isPending } = useLoginMutation({
    onSuccess: (res) => {
      dispatch(setAccessToken(res.accessToken));
      console.log("✅ 로그인 성공!");
      navigate("/projects");
    },
    onError: (err) => {
      console.error("❌ 로그인 실패", err.response?.data.message);
    },
  });

  const handleLogin = () => {
    mutate({ email, password });
  };

  return (
    <FormContainer>
      <div>
        <Input type="email" label="Email Address" onChange={setEmail} />
        <Input type="password" label="PassWord" onChange={setPassword} />
      </div>
      <Button fullWidth size="lg" onClick={handleLogin} loading={isPending}>
        LOG IN
      </Button>
    </FormContainer>
  );
};

export default LoginForm;
