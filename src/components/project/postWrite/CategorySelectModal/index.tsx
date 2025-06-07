import { BiCheck } from "react-icons/bi";
import { CategoryItem, Container } from "./style";
import Label from "@/components/common/Label";

type Props = {
  selected: string;
  onSelect: (tag: { label: string; color: string }) => void;
};

const tagList = [
  { label: "공지", color: "primary" },
  { label: "회의록", color: "yellow" },
  { label: "파일", color: "blue" },
  { label: "기타", color: "brown" },
];

const CategorySelectModal = ({ selected, onSelect }: Props) => {
  return (
    <Container>
      <p>Select Category</p>
      <div>
        {tagList.map((tag) => (
          <CategoryItem
            key={tag.label}
            isSelected={tag.label === selected}
            onClick={() => onSelect(tag)}
          >
            <Label textColors="textWhite" colors={tag.color}>
              {tag.label}
            </Label>
            {tag.label === selected && <BiCheck />}
          </CategoryItem>
        ))}
      </div>
    </Container>
  );
};

export default CategorySelectModal;
