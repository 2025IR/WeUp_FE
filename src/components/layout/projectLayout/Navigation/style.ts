import styled from "@emotion/styled";

export const NavWrapper = styled.div`
  display: flex;
`;

export const NavItem = styled.div<{ active: boolean }>`
  min-width: 7.5rem;
  padding: 1rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.textLight};
  border-bottom: 5px solid
    ${({ active, theme }) => (active ? theme.colors.primary : "transparent")};

  transition: border-bottom 0.2s ease;
`;
