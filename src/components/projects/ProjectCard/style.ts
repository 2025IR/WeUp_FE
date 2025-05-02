import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  > img {
    width: 10rem;
    height: 10rem;

    border-radius: ${({ theme }) => theme.radius.lg};
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;

    > div {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;

  border-radius: ${({ theme }) => theme.radius.md};

  > h2 {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
