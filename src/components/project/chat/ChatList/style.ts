import styled from "@emotion/styled";

export const Container = styled.div`
  width: 350px;
  height: 100%;
  padding: 0 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`;

export const Title = styled.div`
  padding: 12px;
`;

export const ChatListWrapper = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ChatListItem = styled.div<{ selected?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.secondary : theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ChatInfo = styled.div`
  flex: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const ChatTextBlock = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > h3 {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text};
  }

  > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const UnreadBadge = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.caption};
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const NewChatArea = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.sm};

  > svg {
    width: 0.75rem;
    height: 0.75rem;
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
