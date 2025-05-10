import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
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

export const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 10rem);
  gap: 5rem;
`;
