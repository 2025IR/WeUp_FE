import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;

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

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  > img {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: ${({ theme }) => theme.radius.full};
  }
`;

export const UserInfo = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    cursor: auto;
  }

  > button:nth-child(3),
  > button:nth-child(4) {
    cursor: pointer;
  }
`;

export const AlertCountWrapper = styled.div`
  position: absolute;
  right: -8px;
  top: -4px;

  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.caption};
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.textWhite};
`;
