import styled from "@emotion/styled";

export const InputContainer = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.375rem 0;

  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textLight};
`;
