import styled from "@emotion/styled";
import { ToggleStyledProps } from "./type";

export const StyledToggle = styled.div<ToggleStyledProps>`
  width: 1.625rem;
  height: 0.75rem;
  padding: 1px 2px;

  display: flex;
  justify-content: ${({ checked }) => (checked ? "flex-end" : "flex-start")};
  align-items: center;

  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.secondary};
  box-shadow: inset 1px 1px 0px 0px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.lg};

  &:hover {
    cursor: pointer;
  }

  > div {
    width: 0.625rem;
    height: 0.625rem;
    background-color: ${({ theme }) => theme.colors.textWhite};
    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.4);
    border-radius: ${({ theme }) => theme.radius.full};
  }
`;
