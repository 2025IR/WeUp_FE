import styled from "@emotion/styled";

export const InputSection = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.background};
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

export const ImageWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
  }
`;

export const StyledTag = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;

export const AiButton = styled.div<{ isAI: boolean }>`
  position: absolute;
  top: -45px;
  left: 0;
  padding: 0.5rem 1rem;

  display: flex;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;

  opacity: ${({ isAI }) => (isAI ? 1 : 0.5)};

  > svg {
    width: ${({ theme }) => theme.icon.md};
    height: ${({ theme }) => theme.icon.md};
    color: #e6dc6d;
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SendButton = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
