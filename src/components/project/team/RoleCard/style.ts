import styled from "@emotion/styled";

export const RoleWrapper = styled.div`
  width: 100%;
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    width: ${({ theme }) => theme.icon.sm};
    height: ${({ theme }) => theme.icon.sm};
    color: ${({ theme }) => theme.colors.textLight};
    cursor: pointer;
  }
`;

export const RoleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > svg {
    width: ${({ theme }) => theme.icon.lg};
    height: ${({ theme }) => theme.icon.lg};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
