import { AiFillDelete } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import {
  ColorCard,
  ColorSection,
  EditInput,
  EditSection,
  EditTitle,
} from "./style";

const Colors = [
  { name: "default", code: "#111111" },
  { name: "gray", code: "#BFBFBF" },
  { name: "red", code: "#FF4D4F" },
  { name: "green", code: "#52C41A" },
  { name: "blue", code: "#1890FF" },
  { name: "purple", code: "#722ED1" },
  { name: "orange", code: "#FA8C16" },
];

const EditRoleModal = () => {
  return (
    <>
      <EditSection>
        <EditTitle>
          <p>Edit Option</p>
          <AiFillDelete />
        </EditTitle>
        <EditInput>
          <input type="text" />
          <CgAddR />
        </EditInput>
      </EditSection>

      <ColorSection>
        <p>Colors</p>
        <div>
          {Colors.map((color) => (
            <ColorCard key={color.name} color={color.code}>
              <div />
              <p>{color.name}</p>
              <BiCheck />
            </ColorCard>
          ))}
        </div>
      </ColorSection>
    </>
  );
};

export default EditRoleModal;
