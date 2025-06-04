import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  > img {
    width: 20px;
    height: 20px;
  }
`;

export const AuthActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
