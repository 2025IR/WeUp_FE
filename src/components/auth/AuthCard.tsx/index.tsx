import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import SocialForm from "../SocialForm";
import { Container, FormSection, NavSection, SideSection } from "./style";

interface AuthCardProps {
  mode: "login" | "signup";
  onChangeMode: () => void;
}

const AuthCard = ({ mode, onChangeMode }: AuthCardProps) => {
  const isLogin = mode === "login";
  return (
    <Container>
      <FormSection>
        {isLogin ? (
          <>
            <h1>Login</h1>
            <LoginForm />
            <SocialForm />
            <NavSection>
              <p>New user?</p>
              <button onClick={onChangeMode}>Sign up</button>
            </NavSection>
          </>
        ) : (
          <>
            <h1>Create Account</h1>
            <SignUpForm />
            <NavSection>
              <p>Already Have an account?</p>
              <button onClick={onChangeMode}>Sign in</button>
            </NavSection>
          </>
        )}
      </FormSection>

      <SideSection>
        {/* 추후 이미지 추가 예정 */}
        <img
          src="https://pixabay.com/get/gb02fdab7a65ffc304f2dd11ab169ebf8de1c878ef5aff546c8ef89caf218a882e9573125bcb28ae718203f0a49beb29179640439438596c3bb2c7b00836572eb93af0e9d5d8e5ae9fed85dc9a7e2d993_640.png"
          alt="image"
        />
      </SideSection>
    </Container>
  );
};

export default AuthCard;
