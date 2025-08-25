import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { FormContainer } from "./style";
import { useState } from "react";
import { useLoginMutation } from "@/query/auth/useLoginMutation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = useLoginMutation();

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
