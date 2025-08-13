import styled from "@emotion/styled";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const Container = styled.div`
  width: 36rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  width: 100%;
  padding: 0.75rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2.5fr;
  place-items: center;
  font-size: 14px;

  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderMenu = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderButton = styled.div`
  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: ${({ theme }) => theme.radius.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  > svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const Main = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  display: grid;
  grid-template-columns: 1fr 7fr 2.5fr;
`;

export const TimeTable = styled.div`
  padding: 0.75rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 10px;

  > div {
    height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
