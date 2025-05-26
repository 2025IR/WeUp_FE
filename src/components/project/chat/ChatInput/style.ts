import styled from "@emotion/styled";

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};

  > label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > svg {
      width: ${({ theme }) => theme.icon.lg};
      height: ${({ theme }) => theme.icon.lg};
      color: ${({ theme }) => theme.colors.textLight};
    }

    > input {
      display: none;
    }
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.375rem 0;

  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const PreviewImage = styled.div`
  flex: 1;
  padding: 0.375rem 0;

  > img {
    height: 10rem;
  }
`;

export const ImageWrapper = styled.div``;
