import styled from "@emotion/styled";

export const ListContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled.div`
  width: 100%;
  min-height: 45px;
  max-height: 65px;
  padding: 0 2rem;
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CardInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 3.125rem;

  > p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 14px;
  }
`;

export const BoardMain = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 1.5rem;
  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }

  > svg {
    width: ${({ theme }) => theme.icon.md};
    height: ${({ theme }) => theme.icon.md};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
