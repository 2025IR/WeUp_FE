import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MeetingCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const VideoPreview = styled.div`
  width: 32rem;
  height: 20rem;

  border-radius: ${({ theme }) => theme.radius.lg};

  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: ${({ theme }) => theme.radius.lg};
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > h1 {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ToggleButton = styled.button`
  width: 3.75rem;
  height: 3.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius.full};

  > svg {
    width: 1.75rem;
    height: 1.75rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
