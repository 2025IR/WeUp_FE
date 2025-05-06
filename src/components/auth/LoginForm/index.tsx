import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const LoginForm = () => {
  return (
    <div>
      <Input type="email" />
      <Input type="password" />
      <Button fullWidth size="lg">
        LOG IN
      </Button>
    </div>
  );
};

export default LoginForm;
