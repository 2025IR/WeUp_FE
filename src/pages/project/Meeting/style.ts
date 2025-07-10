import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: -1px;
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

  > div {
    --lk-bg: ${({ theme }) => theme.colors.background}; // 배경화면
    --lk-bg2: ${({ theme }) => theme.colors.secondary}; // 배경화면
    --lk-fg: ${({ theme }) => theme.colors.textLight};
    --lk-fg5: ${({ theme }) => theme.colors.textLight};
  }

  // 화면 크기 높이에 맞춰 크기 조절
  .lk-grid-layout {
    width: auto;
  }

  // 버튼
  .lk-button {
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textLight};
  }

  // 종료 버튼
  .lk-disconnect-button {
    background-color: ${({ theme }) => theme.colors.background};
  }

  // 버튼 hover
  .lk-button:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  // 버튼 활성화
  .lk-button[aria-pressed="true"] {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  // 옵션 버튼 활성화
  .lk-media-device-select [data-lk-active="true"] > .lk-button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  // 옵션 메뉴 창 배경
  .lk-device-menu {
    background-color: ${({ theme }) => theme.colors.background};
  }

  // 옵션 버튼 hover
  .lk-media-device-select
    li:not([data-lk-active="true"])
    > .lk-button:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  // 채팅 입력창
  [data-lk-theme] .lk-form-control {
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textLight};
  }

  // 채팅 메세지
  .lk-chat-entry[data-lk-message-origin="local"] .lk-message-body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textLight};
  }

  // 카메라 off 시 기본 이미지
  .lk-participant-placeholder svg path {
    fill-opacity: 0.5;
  }

  // 토스트 메뉴
  .lk-toast {
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
