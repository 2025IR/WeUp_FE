import styled from "@emotion/styled";

export const MembersList = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
`;
