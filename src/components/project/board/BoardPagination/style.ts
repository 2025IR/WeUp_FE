import styled from "@emotion/styled";
import { StyledButtonProps } from "./type";

export const PaginationWrapper = styled.div`
  width: 100%;
  padding: 1.25rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  min-width: 2rem;
  padding: 6px 12px;

  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  color: ${({ active, theme }) =>
    active ? theme.colors.textWhite : theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: none;

  cursor: pointer;
`;
