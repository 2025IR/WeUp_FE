import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const MainSection = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
`;

export const FileInputWrapper = styled.label`
  width: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;

  > input {
    display: none;
  }
`;

export const InfoTitle = styled.div`
  width: 84px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.text};

  > svg {
    width: ${({ theme }) => theme.icon.md};
    height: ${({ theme }) => theme.icon.md};
  }
`;

export const FileWrapper = styled.div`
  width: 360px;
  height: 81px;
  padding: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.25) inset;
`;

export const FilePlaceholder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.textLight};

  > svg {
    width: ${({ theme }) => theme.icon.md};
    height: ${({ theme }) => theme.icon.md};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  flex: 1;
  padding: 1rem;

  > textarea {
    width: 100%;
    height: 100%;

    resize: none;
    overflow: hidden;

    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;
