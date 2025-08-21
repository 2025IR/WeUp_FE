import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  gap: 0.625rem;
  flex-direction: column;
  align-items: flex-start;

  ::-webkit-scrollbar {
    display: none;
  }
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
