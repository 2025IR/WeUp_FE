import styled from "@emotion/styled";

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

export const UploadButton = styled.label`
  width: 100%;
  padding: 0.325rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1.2px dashed ${({ theme }) => theme.colors.textLight};
  border-radius: ${({ theme }) => theme.radius.sm};

  > input {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
