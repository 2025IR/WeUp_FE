import styled from "@emotion/styled";
import { IconLabelStyledProps } from "./type";

export const Wrapper = styled.div<IconLabelStyledProps>`
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
