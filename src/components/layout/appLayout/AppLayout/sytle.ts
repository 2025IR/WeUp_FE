import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: -1px;

  .toast-container {
    font-size: 14px;
    --toastify-color-progress-light: ${({ theme }) => theme.colors.primary};
    --toastify-color-progress-dark: ${({ theme }) => theme.colors.primary};
  }
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: flex;
`;

export const OutletWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 6rem;
  overflow: hidden;
`;
