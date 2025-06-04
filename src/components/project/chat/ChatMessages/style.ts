import styled from "@emotion/styled";

export const MessagesContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.textLight};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
