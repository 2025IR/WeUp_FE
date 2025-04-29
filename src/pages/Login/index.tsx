import Input from "@/components/common/Input";

const Login = () => {
  return (
    <div>
      <Input type="email" label="Email Address" isButton="인증" />
      <Input type="email" label="Email Address" isButton="확인" />
      <Input type="email" label="Email Address" isButton="인증" />
      <Input type="email" label="Email Address" />
    </div>
  );
};

export default Login;
