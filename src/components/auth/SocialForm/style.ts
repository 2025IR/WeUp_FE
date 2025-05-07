import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const HeaderSection = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.625rem;

  > hr {
    flex: 1;
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const MainSection = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  > a {
    width: 2rem;
    height: 2rem;
    border-radius: ${({ theme }) => theme.radius.full};
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
