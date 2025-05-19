import { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { FormContainer } from "./style";
import { useSignUp } from "@/query/auth/useSignUp";
import { useRequestEmailCode } from "@/query/auth/useRequestEmail";
import { useCheckEmailCode } from "@/query/auth/useCheckEmail";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailRequested, setEmailRequested] = useState(false);
  const [isCodeVerified, setCodeVerified] = useState(false);

  const navigate = useNavigate();

  const requestEmailMutation = useRequestEmailCode();
  const checkCodeMutation = useCheckEmailCode();
  const signUpMutation = useSignUp();

  const handleRequestEmail = () => {
    requestEmailMutation.mutate(email, {
      onSuccess: () => {
        setEmailRequested(true);
      },
    });
  };

  const handleCheckCode = () => {
    checkCodeMutation.mutate(
      { email, checkCode: code },
      {
        onSuccess: () => {
          setCodeVerified(true);
        },
      }
    );
  };

  const handleSignUp = () => {
    signUpMutation.mutate(
      { email, password, name },
      {
        onSuccess: () => {
          navigate("/auth");
        },
      }
    );
  };

  const isAllValid =
    isCodeVerified &&
    name.length > 0 &&
    password.length >= 6 &&
    email.length > 0;

  return (
    <FormContainer>
      <div>
        <Input type="text" label="Name" value={name} onChange={setName} />

        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={setEmail}
          isButton={isEmailRequested ? "재요청" : "인증"}
          onButtonClick={handleRequestEmail}
        />

        {isEmailRequested && (
          <Input
            type="text"
            label="Code"
            value={code}
            onChange={setCode}
            isButton="확인"
            onButtonClick={handleCheckCode}
            status={isCodeVerified ? "success" : "normal"}
          />
        )}

        <Input
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
        />
      </div>

      <Button
        fullWidth
        size="lg"
        disabled={!isAllValid}
        onClick={handleSignUp}
        variant={isAllValid ? "primary" : "secondary"}
      >
        Sign Up
      </Button>
    </FormContainer>
  );
};

export default SignUpForm;
