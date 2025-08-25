import styled from "@emotion/styled";

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContentWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
