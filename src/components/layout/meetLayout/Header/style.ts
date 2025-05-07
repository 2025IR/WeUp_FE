import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const LogoWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
`;
