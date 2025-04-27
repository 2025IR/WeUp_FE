import logo_light from "@/assets/logo/logo_light.svg";
import Button from "@/components/common/Button";
import { AiOutlineBell } from "react-icons/ai";
// import logo_dark from "@/assets/logo/logo_light.svg";

const Header = () => {
  return (
    <div>
      <div>
        <img src={logo_light} alt="logo" />
        <p>we:up</p>
      </div>

      <div>
        <div>
          <Button>yundoll</Button>
          <Button variant="secondary">mar0722@naver.com</Button>
          <Button variant="secondary" iconOnly>
            <AiOutlineBell />
          </Button>
        </div>

        <img
          src="https://pixabay.com/get/ga883c5369a2e4fb6ee4343c04972f15fec8b0a3357f26bb30ce697ca4ce2e6262db674fd27bbe286433358fad1c22d041d18d2fd32d0869e065edbdf4d703b8ee8809a17e0e28dac7387f9b4030c57ed_640.png"
          alt="profile-iamge"
        />
      </div>
    </div>
  );
};

export default Header;
