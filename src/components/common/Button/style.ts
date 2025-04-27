import styled from "@emotion/styled";
import { ButtonStyledPorps } from "./types";

export const StyledButton = styled.button<ButtonStyledPorps>`
  display: flex;
  align-content: center;
  justify-content: center;

  // 크기, 아이콘 버튼 스타일
  ${({ iconOnly, size, theme }) => {
    if (iconOnly) {
      return `
            padding: 0.25rem;
            border-radius: ${theme.radius.sm};

            & > svg {
                width: ${theme.icon.lg};
                height: ${theme.icon.lg};
                padding: 2px;
            }
        `;
    }
    switch (size) {
      case "sm":
        return `
            padding: 0.5rem; 
            border-radius: ${theme.radius.sm}; 
            min-width: 4rem; 
            font-size: ${theme.fontSize.caption}; 
            font-weight: ${theme.fontWeight.bold};
        `;
      case "lg":
        return `
            padding: 0.5rem 2.5rem; 
            border-radius: ${theme.radius.md}; 
            font-size: ${theme.fontSize.small}; 
            font-weight: ${theme.fontWeight.medium};
        `;
    }
  }}

  // 배경 색상 및 텍스트 색상 (varient)
  ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return `
            background-color: ${theme.colors.primary}; 
            color: ${theme.colors.textWhite};
        `;
      case "secondary":
        return `
            background-color: ${theme.colors.secondary}; 
            color: ${theme.colors.text};
        `;
      case "danger":
        return `
            background-color: ${theme.colors.danger}; 
            color: ${theme.colors.textWhite};
        `;
    }
  }}

  // full 너비 적용
  ${({ fullWidth }) => {
    if (fullWidth) {
      return `width: 100%`;
    }
  }}

  // disabled 상태 처리
  ${({ disabled }) => {
    if (disabled) {
      return `opacity: 0.6; cursor: not-allowed;`;
    }
  }}
`;
