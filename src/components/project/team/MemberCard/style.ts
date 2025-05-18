import styled from "@emotion/styled";

export const GridItem = styled.div`
  height: 3.75rem;
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: 6rem 18rem 10rem 1fr;
  align-items: center;
  justify-items: center;

  font-size: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const RoleSection = styled.div`
  padding-left: 4rem;
  justify-self: start;
  cursor: pointer;

  > p {
    padding: 5px;
  }
`;

export const StartItem = styled.div`
  justify-self: start;
`;
