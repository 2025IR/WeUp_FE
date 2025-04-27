import styled from "@emotion/styled";

export const Wrapper = styled.div<{
  type: "image" | "icon";
  size: "sm" | "md" | "lg";
  fontSize: "caption" | "small" | "body";
  gap: string;
  full: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};

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
  }
`;
