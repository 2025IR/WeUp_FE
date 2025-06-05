import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 10px 4px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    padding: 0 4px;
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textLight};
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryItem = styled.div<{ isSelected: boolean }>`
  width: 100%;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary : theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
