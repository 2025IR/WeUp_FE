import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const MainSection = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.border};
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
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

export const FileWrapper = styled.div`
  width: 360px;
  height: 81px;
  padding: 6px;

  display: flex;
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

export const FilePreview = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const FileCard = styled.a`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;

  & > svg:first-of-type {
    width: ${({ theme }) => theme.icon.sm};
    height: ${({ theme }) => theme.icon.sm};
    color: ${({ theme }) => theme.colors.primary};
  }

  & > p:nth-of-type(1) {
    flex: 1;
    font-size: ${({ theme }) => theme.fontSize.caption};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > p:nth-of-type(2) {
    font-size: 10px;
  }

  &:hover > p:nth-of-type(1) {
    text-decoration: underline;
  }
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  flex: 1;
  padding: 2rem 1rem;

  > textarea {
    width: 100%;
    height: 100%;

    overflow: clip;
    resize: none;

    font-size: ${({ theme }) => theme.fontSize.base};

    line-height: 1.6;
  }
`;
