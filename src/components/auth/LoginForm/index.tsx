import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { FormContainer } from "./style";

const LoginForm = () => {
  return (
    <FormContainer>
      <div>
        <Input type="email" label="Email Address" />
        <Input type="password" label="PassWord" />
      </div>
      <Button fullWidth size="lg">
        LOG IN
      </Button>
    </FormContainer>
  );
};

export default LoginForm;
