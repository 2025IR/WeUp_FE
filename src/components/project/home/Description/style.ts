import styled from "@emotion/styled";

export const Wrapper = styled.div<{ isFill: boolean }>`
  width: 100%;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme, isFill }) =>
    isFill ? theme.colors.secondary : theme.colors.background};

  &:hover .edit_icon {
    display: block;
  }
`;

export const StyledTextarea = styled.textarea`
  flex: 1;
  resize: none;

  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledButton = styled.button`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.5;

  > svg {
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.textLight};
  }

  > p {
    position: absolute;
    top: -1.5rem;
    left: -5rem;
    white-space: nowrap;
  }

  .edit_icon {
    display: none;
  }
`;
