import styled from "@emotion/styled";

export const TaskContainer = styled.div``;
export const TaskHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 62px 1fr 130px 200px 200px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderTitle = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  border-left: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const TaskItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 62px 1fr 130px 200px 200px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const AddItem = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ModalContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  z-index: ${({ theme }) => theme.zIndex.modal};
  width: 200px;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
