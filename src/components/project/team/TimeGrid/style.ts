import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: -1px;
`;

export const TimeDiv = styled.div<{
  opacity: number;
  isBottomHighlight?: boolean;
}>`
  height: 0.75rem;
  box-shadow: inset -1px 0 0 ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ opacity }) => opacity};
  border-bottom: 1.5px solid
    ${({ theme, isBottomHighlight }) =>
      isBottomHighlight ? theme.colors.textLight : theme.colors.border};
`;
