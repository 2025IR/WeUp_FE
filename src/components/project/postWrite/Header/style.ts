import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0.75rem 1rem 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.textLight};

  > svg {
    width: ${({ theme }) => theme.icon.lg};
    height: ${({ theme }) => theme.icon.lg};
    cursor: pointer;
  }

  > h1 {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
