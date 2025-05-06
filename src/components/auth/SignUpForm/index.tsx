import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const SignUpForm = () => {
  return (
    <div>
      <Input type="text" />
      <Input type="email" isButton="인증" />
      <Input type="number" isButton="확인" />
      <Input type="password" />
      <Button fullWidth size="lg">
        Sign Up
      </Button>
    </div>
  );
};

export default SignUpForm;
