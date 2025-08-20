import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius.sm};

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FilterSection = styled.div`
  height: 1.75rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textLight};
  }

  > div {
    height: 100%;
    display: flex;
    gap: 1rem;
  }
`;

// 추후 react-select 사용하여 리펙토링 예정
export const StyledSelect = styled.select`
  width: 7rem;
  padding: 0 1rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const SearchBox = styled.div`
  width: 18.75rem;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};

  > input {
    flex: 1;
    height: 100%;

    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.text};
  }

  > svg {
    width: ${({ theme }) => theme.icon.md};
    height: ${({ theme }) => theme.icon.md};
  }
`;
