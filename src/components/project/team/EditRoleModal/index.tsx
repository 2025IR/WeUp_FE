import { AiFillDelete } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import {
  ColorCard,
  ColorSection,
  EditInput,
  EditSection,
  EditTitle,
} from "./style";
import { useEffect, useState } from "react";

const Colors = [
  { name: "red" },
  { name: "orange" },
  { name: "yellow" },
  { name: "green" },
  { name: "blue" },
  { name: "purple" },
  { name: "pink" },
  { name: "brown" },
  { name: "gray" },
];

type EditRoleModalProps = {
  roleId: number;
  roleName: string;
  roleColor: string;
  onEdit: (updated: {
    roleId: number;
    roleName: string;
    roleColor: string;
  }) => void;
  onDelete: (roleId: number) => void;
};

const EditRoleModal = ({
  roleId,
  roleName,
  roleColor,
  onEdit,
  onDelete,
}: EditRoleModalProps) => {
  const [name, setName] = useState(roleName);
  const [color, setColor] = useState(roleColor);

  useEffect(() => {
    console.log(name, color);
    onEdit({
      roleId,
      roleName: name,
      roleColor: color,
    });
  }, [name, color]);

  return (
    <>
      <EditSection>
        <EditTitle>
          <p>Edit Option</p>
          <AiFillDelete onClick={() => onDelete(roleId)} />
        </EditTitle>
        <EditInput>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </EditInput>
      </EditSection>

      <ColorSection>
        <p>Colors</p>
        <div>
          {Colors.map((c) => (
            <ColorCard
              key={c.name}
              color={c.name}
              onClick={() => setColor(c.name)}
              selected={c.name === color}
            >
              <div />
              <p>{c.name}</p>
              {c.name === color && <BiCheck />}
            </ColorCard>
          ))}
        </div>
      </ColorSection>
    </>
  );
};

export default EditRoleModal;
