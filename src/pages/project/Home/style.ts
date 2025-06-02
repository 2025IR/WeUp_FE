import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CalendarWrapper = styled.div`
  --fc-border-color: ${({ theme }) => theme.colors.border};
  --fc-today-bg-color: ${({ theme }) => theme.colors.secondary};
  --fc-event-bg-color: ${({ theme }) => theme.colors.primary};
  --fc-event-border-color: ${({ theme }) => theme.colors.primary};

  // 캘린더 컨테이너
  .fc {
    gap: 0.5rem;
  }

  // 캘린더 헤더
  .fc .fc-toolbar.fc-header-toolbar {
    margin: 0;
  }

  // 캘린더 헤더 타이틀
  .fc-toolbar-title {
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.textLight};
  }

  // today 버튼
  .fc .fc-button {
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.radius.sm};
    min-width: 4rem;
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textLight};
    border: none;
  }

  .fc-today-button {
    display: none;
  }

  .fc-direction-ltr .fc-button-group > .fc-button {
    box-shadow: none;
  }

  .fc .fc-button-primary:not(:disabled).fc-button-active,
  .fc .fc-button-primary:not(:disabled):active {
    background-color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textLight};
    border: none;
    box-shadow: none;
  }
`;
