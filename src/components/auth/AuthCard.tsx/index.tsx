import logo_light from "@/assets/logo/logo_light.svg";
import logo_dark from "@/assets/logo/logo_dark.svg";
import { useTheme } from "@/contexts/ThemeContext";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import SocialForm from "../SocialForm";

interface AuthCardProps {
  mode: "login" | "signup";
  onChangeMode: () => void;
}

const AuthCard = ({ mode, onChangeMode }: AuthCardProps) => {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? logo_light : logo_dark;

  const isLogin = mode === "login";
  return (
    <div>
      <div>
        {isLogin ? (
          <>
            <h1>Login</h1>
            <LoginForm />
            <SocialForm />
            <div>
              <p>New user?</p>
              <button onClick={onChangeMode}>Sign up</button>
            </div>
          </>
        ) : (
          <>
            <h1>Create Account</h1>
            <SignUpForm />
            <div>
              <p>Already Have an account?</p>
              <button onClick={onChangeMode}>Sign in</button>
            </div>
          </>
        )}
      </div>

      <div>
        <div>
          <img src={logoSrc} alt="logo" />
          <p>we:up</p>
        </div>
        <div>
          // 추후 이미지 추가 예정
          <img src="#" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
