import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;

export const Header = styled.div`
  width: 100%;
  padding: 0.75rem 0;

  display: flex;
  justify-content: space-between;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.subtitle};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 10rem);
  gap: 5rem;
`;

export const ModalContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;

  > img {
    width: 7.5rem;
    height: 7.5rem;

    border-radius: ${({ theme }) => theme.radius.sm};
    object-fit: cover;
  }

  > div {
    flex: 1;
    padding: 0.5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const UploadButton = styled.button`
  width: 100%;
  padding: 0.325rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1.2px dashed ${({ theme }) => theme.colors.textLight};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
