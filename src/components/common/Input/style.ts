import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.p`
  padding: 0.25rem 0;
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;

  > button {
    min-width: 3.125rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textWhite};
    }
  }
`;

export const StyledInput = styled.div<{ status: string }>`
  width: 100%;
  padding: 0.5rem 0.25rem;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ status, theme }) =>
      status === "success"
        ? theme.colors.primary
        : status === "error"
        ? theme.colors.danger
        : theme.colors.border};

  > input {
    flex: 1;
    color: ${({ theme }) => theme.colors.text};

    &:read-only {
      color: ${({ theme }) => theme.colors.textLight};
      cursor: default;
    }
  }

  > svg {
    width: ${({ theme }) => theme.icon.md};
    height: ${({ theme }) => theme.icon.md};
    color: ${({ status, theme }) =>
      status === "success"
        ? theme.colors.primary
        : status === "error"
        ? theme.colors.danger
        : theme.colors.border};
  }
`;

export const Message = styled.p`
  padding: 0.25rem 0;
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.danger};
`;
