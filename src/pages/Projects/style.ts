import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 0.75rem 0;

  display: flex;
  justify-content: space-between;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.subtitle};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Main = styled.div<{ isFiveOrLess: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ isFiveOrLess }) =>
    isFiveOrLess
      ? "repeat(5, minmax(12rem, 1fr));"
      : "repeat(auto-fit, minmax(12rem, 1fr));"};
  gap: clamp(4rem, 5vw, 6rem);
  margin-bottom: 2.75rem;
`;
