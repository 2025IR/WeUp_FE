import styled from "@emotion/styled";
import { BoardLabelProps } from "./type";

const tagColorMap: Record<string, string> = {
  회의록: "#CC9500",
  파일: "#015C99",
  기타: "#995501",
  공지: "#019963",
};

export const ListContainer = styled.div``;

export const CardWrapper = styled.div`
  width: 100%;
  padding: 1.25rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CardInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 3.125rem;
`;

export const BoardMain = styled.div`
  display: flex;
  gap: 1.2rem;
  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }

  > svg {
    width: ${({ theme }) => theme.icon.lg};
    height: ${({ theme }) => theme.icon.lg};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const BoardLabel = styled.div<BoardLabelProps>`
  width: 5.75rem;
  height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background-color: ${({ tag }) => tagColorMap[tag]};

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;

export const UserInfo = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.textLight};
`;
