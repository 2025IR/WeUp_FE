import styled from "@emotion/styled";

export const StyledLabel = styled.span<{
  colors: "primary" | "secondary";
  textColors: "text" | "textLight" | "textWhite";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, colors }) => theme.colors[colors]};
  color: ${({ theme, textColors }) => theme.colors[textColors]};
  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
  min-width: 3.25rem;
  border-radius: ${({ theme }) => theme.radius.sm};

  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
