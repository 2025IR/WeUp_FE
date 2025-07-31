import styled from "@emotion/styled";

export const MemberSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    padding: 0.25rem 0;
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const MemberItemWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.sm};
  overflow: hidden;
`;

export const MemberItem = styled.div<{ isSelected: boolean }>`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.secondary : theme.colors.background};

  > img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: ${({ theme }) => theme.radius.full};
  }

  > p {
    flex: 1;
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.text : theme.colors.textLight};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primary : theme.colors.textLight};
  }
`;
