import styled from "@emotion/styled";

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

  > img {
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
    border-radius: ${({ theme }) => theme.radius.full};
    align-self: flex-start;
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
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
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const ImageCard = styled.img`
  width: 12rem;
  border-radius: ${({ theme }) => theme.radius.lg};
`;
