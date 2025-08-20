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

export const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.75rem;

  display: flex;
  align-items: flex-start;
  gap: 0.5px;
`;

export const CalendarWrapper = styled.div`
  padding: 0 1rem;
  flex: 1;
  width: 100%;

  --fc-border-color: ${({ theme }) => theme.colors.border};
  --fc-today-bg-color: ${({ theme }) => theme.colors.background};
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

  .fc-day-today .fc-daygrid-day-number {
    color: ${({ theme }) => theme.colors.primary}; /* 원하는 테마 색상 */
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
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

export const SideWrapper = styled.div`
  width: 332px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ProjectDayCounter = styled.div`
  width: 300px;
  padding: 1.4rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 900;
  opacity: 0.5;

  p:nth-child(1) {
    font-size: 1.5rem;
  }

  p:nth-child(2) {
    font-size: 1rem;
  }

  p:nth-child(3) {
    font-size: 2.5rem;
    text-align: right;
    align-self: flex-end;
  }
`;

export const TodoListWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  > h2 {
    padding-left: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const TodoList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TodoListCard = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.textLight};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const TodoTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h3 {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
  }
`;
