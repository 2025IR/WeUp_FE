import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 0.75rem 0;

  display: flex;
  gap: 2rem;
  align-items: flex-end;

  > img {
    width: 5rem;
    height: 5rem;

    border-radius: ${({ theme }) => theme.radius.lg};
    object-fit: cover;
  }
`;

export const TabSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2.5rem;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding: 0.75rem 0;
  }
`;

export const LabelSection = styled.div`
  padding: 1rem 0;

  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
