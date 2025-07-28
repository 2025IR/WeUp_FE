import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ChatRoomInfo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;

  > svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.textLight};
    cursor: pointer;
  }
`;
