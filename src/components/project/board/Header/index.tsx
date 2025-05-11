import Button from "@/components/common/Button";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Container, FilterSection, SearchBox } from "./style";
import { BoardHeaderProps } from "./type";

const BoardHeader = ({ tag, search, onFilterChange }: BoardHeaderProps) => {
  const [inputValue, setInputValue] = useState(search ?? "");

  const handleSearch = () => {
    onFilterChange(tag, inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Container>
      <div>
        <FilterSection>
          <p>총 6건</p>
          <div>
            <select
              value={tag ?? "전체"}
              onChange={(e) => {
                const value = e.target.value;
                onFilterChange(value === "전체" ? null : value, inputValue);
              }}
            >
              <option value="전체">전체</option>
              <option value="공지">공지</option>
              <option value="회의록">회의록</option>
              <option value="파일">파일</option>
            </select>
            <SearchBox>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <AiOutlineSearch
                onClick={handleSearch}
                style={{ cursor: "pointer" }}
              />
            </SearchBox>
          </div>
        </FilterSection>
        <Button>글쓰기</Button>
      </div>
    </Container>
  );
};

export default BoardHeader;
