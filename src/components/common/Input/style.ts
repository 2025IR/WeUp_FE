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

export const StyledInput = styled.div`
  width: 100%;
  padding: 0.5rem 0.25rem;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  > input {
    flex: 1;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Message = styled.p`
  padding: 0.25rem 0;
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
