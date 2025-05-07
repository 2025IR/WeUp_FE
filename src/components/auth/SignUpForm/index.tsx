import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { FormContainer } from "./style";

const SignUpForm = () => {
  return (
    <FormContainer>
      <div>
        <Input type="text" label="Name" />
        <Input type="email" label="Email Address" isButton="인증" />
        <Input type="number" label="Code" isButton="확인" />
        <Input type="password" label="Password" />
      </div>
      <Button fullWidth size="lg">
        Sign Up
      </Button>
    </FormContainer>
  );
};

export default SignUpForm;
