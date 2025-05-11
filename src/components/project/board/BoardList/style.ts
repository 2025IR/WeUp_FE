import styled from "@emotion/styled";

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
  display: flex;
  align-items: center;
  gap: 3.125rem;

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const BoardLabel = styled.div`
  width: 5.75rem;
  height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background-color: #cc9500;

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 3.125;

  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.textLight};
`;
