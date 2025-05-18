import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

export const TeamWrapper = styled.div`
  width: 100%;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  overflow: hidden;
`;

export const GridHeader = styled.div`
  height: 3.125rem;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: 6rem 18rem 10rem 1fr auto;
  align-items: center;
  justify-items: center;

  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const RoleSection = styled.div`
  padding-left: 4rem;
  justify-self: start;

  > p {
    padding: 5px;
  }
`;

export const RoleModalContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => `${top + 8}px`};
  left: ${({ left }) => `${left + 64}px`};
  padding: 10px 4px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
