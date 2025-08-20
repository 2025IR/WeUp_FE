import styled from "@emotion/styled";

export const Container = styled.div<{ status: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  > img {
    width: 100%;
    aspect-ratio: 1 / 1;

    border-radius: ${({ theme }) => theme.radius.lg};
    object-fit: cover;

    ${({ status }) =>
      !status &&
      `
      filter: brightness(0.3); // 어둡게
    `}
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;

  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;

  > h2 {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
