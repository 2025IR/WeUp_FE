import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;

  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`;

export const FormSection = styled.div`
  width: 30rem;
  padding: 2.5rem 3.75rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;

  > h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

export const NavSection = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};

  > button {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SideSection = styled.div`
  width: 15rem;
  padding: 1rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};

  > img {
    width: 8.75rem;
    height: 8.75rem;
    border-radius: ${({ theme }) => theme.radius.full};
  }
`;
