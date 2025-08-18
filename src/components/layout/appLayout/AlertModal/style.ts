import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  right: 5.7rem;
  top: 3.5rem;

  z-index: ${({ theme }) => theme.zIndex.toast};
  width: 242px;
  max-height: 285px;
  padding: 10px 4px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > p {
    padding: 0 4px;
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textLight};
  }

  > div {
    width: 100%;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0.25rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.border};
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;

export const AlertCard = styled.div`
  width: 100%;
  min-height: 4rem;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const AlertTitle = styled.div<{ isGreen: boolean }>`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  > div {
    width: 6px;
    height: 6px;
    margin: 4px 0;

    flex-shrink: 0;
    border-radius: ${({ theme }) => theme.radius.full};
    background-color: ${({ theme, isGreen }) =>
      isGreen ? theme.colors.primary : theme.colors.secondary};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const AlertTime = styled.div`
  display: flex;
  justify-content: end;

  > p {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
