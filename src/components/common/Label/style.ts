import styled from "@emotion/styled";
import { LabelStyledProps } from "./type";

export const StyledLabel = styled.span<LabelStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, colors }) =>
    theme.colors[colors as keyof typeof theme.colors]};
  color: ${({ theme, textColors }) => theme.colors[textColors]};
  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
  min-width: 3.25rem;
  border-radius: ${({ theme }) => theme.radius.sm};

  ${({ onClick }) => onClick && `cursor: pointer;`}

  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
