import styled from "@emotion/styled";

export const Container = styled.div`
  width: 16rem;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-start;

  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

export const NavWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;

  display: flex;
  gap: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const NavItem = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};

  display: flex;
  align-items: flex-start;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ProjectWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding: 1rem 0;

  display: flex;
  gap: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const ToggleItem = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};

  display: flex;
  align-items: flex-start;
`;
