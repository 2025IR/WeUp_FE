import styled from "@emotion/styled";
import { ToggleStyledProps } from "./type";

export const ToggleWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};

  display: flex;
  align-items: flex-start;
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
  }

  > div > div {
    display: ${({ collapsed }) => (collapsed ? "none" : "block")};
  }
`;

export const StyledToggle = styled.div<ToggleStyledProps>`
  width: 1.625rem;
  height: 0.75rem;
  padding: 1px 2px;

  position: relative;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.secondary};
  box-shadow: inset 1px 1px 0px 0px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.lg};

  transition: background-color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
  }

  > div {
    display: absolute;
    width: 0.625rem;
    height: 0.625rem;

    background-color: ${({ theme }) => theme.colors.textWhite};
    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.4);
    border-radius: ${({ theme }) => theme.radius.full};

    transform: ${({ checked }) =>
      checked ? "translateX(0.75rem)" : "translateX(0)"};

    transition: transform 0.2s ease-in-out;
  }
`;
