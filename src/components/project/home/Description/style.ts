import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledTextarea = styled.textarea`
  flex: 1;
  resize: none;
  line-height: 1.5rem;

  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
