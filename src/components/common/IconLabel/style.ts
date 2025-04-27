import styled from "@emotion/styled";

export const Wrapper = styled.div<{
  type: "image" | "icon";
  size: "sm" | "md" | "lg";
  colors: "text" | "textLight";
  fontSize: "caption" | "small" | "body";
  fontWeight: "medium" | "semibold" | "bold";
  gap: string;
  full: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  color: ${({ theme, colors }) => theme.colors[colors]};
  ${({ type, size, full, theme }) => {
    if (type === "icon") {
      return `
                > svg {
                    width: ${theme.icon[size]};
                    height: ${theme.icon[size]};
                }
            `;
    }
    return `
        > img {
            width: ${theme.icon[size]};
            height: ${theme.icon[size]};
            border-radius: ${full ? theme.radius.full : theme.radius.sm};
        }
    `;
  }}
  > p {
    font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
    font-weight: ${({ theme, fontWeight }) => theme.fontWeight[fontWeight]};
  }
`;
