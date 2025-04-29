import { AiFillCheckCircle } from "react-icons/ai";

const Input = () => {
  return (
    <div>
      <p>Email Address</p>
      <div>
        <input type="email" />
        <AiFillCheckCircle />
      </div>
      <p>이메일 형식이 아닙니다</p>
    </div>
  );
};

export default Input;
