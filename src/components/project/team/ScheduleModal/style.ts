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
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  width: 100%;
  padding: 0.75rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2.5fr;
  place-items: center;
  font-size: 14px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

  background-color: ${({ theme }) => theme.colors.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 10px;

  > div {
    height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const UserTable = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.textLight};

  > svg {
    cursor: pointer;
  }
`;
