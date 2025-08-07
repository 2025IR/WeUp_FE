import styled from "@emotion/styled";

export const SystemCardContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SystemCard = styled.div`
  padding: 0.25rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.secondary};

  > p {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.caption};
  }
`;

export const MyCardContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: end;
  gap: 0.5rem;
`;

export const ContainerCard = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: end;
  gap: 0.5rem;
`;

export const ImgWrapper = styled.div`
  width: 50px;
  margin-right: 0.5rem;
  align-self: flex-start;

  > img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius.full};
  }
`;

export const MessageTime = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSize.caption};
`;

export const MyTextCard = styled.div`
  width: fit-content;
  max-width: 60%;
  padding: 0.5rem 1rem;
  overflow-wrap: break-word;

  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const TextCardWrapper = styled.div`
  width: fit-content;
  max-width: 60%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;

  > p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;
  }
`;

export const TextCard = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  overflow-wrap: break-word;

  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const ImageCard = styled.img`
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const AiTextCard = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  overflow-wrap: break-word;

  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  > div {
    display: flex;
    flex-direction: column;
    gap: 0;

    font-size: ${({ theme }) => theme.fontSize.caption};
  }

  > hr {
    width: 100%;
    height: 1px;
    color: ${({ theme }) => theme.colors.textWhite};
    opacity: 0.5;
  }

  > p {
    white-space: pre-wrap;
  }
`;

export const ReplyName = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
export const ReplyMessage = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
