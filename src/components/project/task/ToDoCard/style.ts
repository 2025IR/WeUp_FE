import styled from "@emotion/styled";

export const TodoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 62px 1fr 130px 200px 200px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:hover .delete-wrapper {
    display: block;
  }
`;

export const CheckWrapper = styled.div<{ isGreen: boolean }>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${({ theme, isGreen }) =>
      isGreen ? theme.colors.primary : theme.colors.textLight};
  }
`;

export const SummaryWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  > input {
    width: 100%;
    height: 100%;

    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const StatusWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

export const AssigneeWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: start;
  align-items: center;

  cursor: pointer;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

export const DateWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: start;
  align-items: center;

  cursor: pointer;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

export const DeleteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    display: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
