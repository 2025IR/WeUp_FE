import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MeetHeader = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const MeetingCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const VideoPreview = styled.div`
  width: 32rem;
  height: 20rem;
  position: relative;

  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};

  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

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
