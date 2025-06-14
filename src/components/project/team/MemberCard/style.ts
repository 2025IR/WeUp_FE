import styled from "@emotion/styled";

export const GridItem = styled.div`
  height: 3.75rem;
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: 2fr 3fr 2fr 6fr;
  column-gap: 5rem;
  align-items: center;
  justify-items: center;

  font-size: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const RoleSection = styled.div`
  min-width: 7.5rem;
  justify-self: start;
  padding-left: 2rem;

  cursor: pointer;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const NameSection = styled.div`
  min-width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmailSection = styled.div`
  min-width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
