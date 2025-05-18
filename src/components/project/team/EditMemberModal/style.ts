import styled from "@emotion/styled";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > p {
    padding: 0 4px;
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const AddSection = styled.div`
  width: 100%;
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    width: 142px;
  }
`;

export const RoleEditContainer = styled.div<{ top: number; left: number }>`
  position: fixed;
  top: ${({ top }) => `${top - 310}px`};
  left: ${({ left }) => `${left - 10}px`};
  padding: 10px 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
