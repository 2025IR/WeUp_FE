import styled from "@emotion/styled";

export const NavButton = styled.div<{ collapsed: boolean }>`
  position: absolute;
  top: 0.5rem;
  right: ${({ collapsed }) => (collapsed ? "1rem" : "1rem")};
  opacity: 0;

  width: 30px;
  height: 30px;

  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};

  transition: opacity 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Container = styled.div<{ collapsed: boolean }>`
  position: relative;

  width: ${({ collapsed }) => (collapsed ? "4rem" : "15rem")};
  height: 100%;
  padding: 0 1rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-start;

  border-right: 1px solid ${({ theme }) => theme.colors.border};

  transition: width 0.5s ease;

  &:hover {
    ${NavButton} {
      opacity: 0.5;
    }
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;

  display: flex;
  gap: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavTitle = styled.div<{ collapsed: boolean }>`
  opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const NavItem = styled.div<{ active?: boolean; collapsed: boolean }>`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};

  display: flex;
  align-items: flex-start;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.background};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.2s ease;
  }

  > div > div {
    display: ${({ collapsed }) => (collapsed ? "none" : "block")};
  }
`;

export const ProjectWrapper = styled.div<{ collapsed: boolean }>`
  flex: 1;
  width: 100%;
  padding: 1rem 0;

  display: flex;
  gap: 0.625rem;
  flex-direction: column;
  align-items: flex-start;

  border-top: 2px solid
    ${({ collapsed, theme }) => (collapsed ? theme.colors.border : "none")};
  border-bottom: 2px solid
    ${({ collapsed, theme }) => (collapsed ? theme.colors.border : "none")};
`;

export const ToggleItem = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};

  display: flex;
  align-items: flex-start;
`;
