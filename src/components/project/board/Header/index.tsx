import Button from "@/components/common/Button";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Container, FilterSection, SearchBox } from "./style";

const BoardHeader = () => {
  const [selected, setSelected] = useState("전체");
  return (
    <Container>
      <div>
        <FilterSection>
          <p>총 6건</p>
          <div>
            <select value={selected}>
              <option value="전체" key="전체">
                전체
              </option>
              <option value="공지" key="공지">
                공지
              </option>
              <option value="회의록" key="회의록">
                회의록
              </option>
              <option value="파일" key="파일">
                파일
              </option>
            </select>
            <SearchBox>
              <input type="text" />
              <AiOutlineSearch />
            </SearchBox>
          </div>
        </FilterSection>
        <Button>글쓰기</Button>
      </div>
    </Container>
  );
};

export default BoardHeader;
