import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
// import SocialForm from "../SocialForm";
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
            {/* <SocialForm /> */}
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
          src="https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley3.png"
          alt="image"
        />
      </SideSection>
    </Container>
  );
};

export default AuthCard;
