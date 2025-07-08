import Description from "@/components/project/home/Description";
import { useProjectInfo } from "@/query/project/useProjectInfo";
import { setProject } from "@/store/project";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  CalendarWrapper,
  Container,
  ContentWrapper,
  ProjectDayCounter,
  SideWrapper,
  TodoList,
  TodoListCard,
  TodoListWrapper,
  TodoTitle,
} from "./style";
import { useGetTodoList } from "@/query/todo/useGetTodoList";
import { useTheme } from "@emotion/react";
import { formatTodoDate } from "@/utils/formatTime";
import Label from "@/components/common/Label";

const Home = () => {
  const theme = useTheme();
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const dispatch = useDispatch();

  const { data } = useProjectInfo(parsedProjectId);
  const { data: getTodoList } = useGetTodoList(parsedProjectId);

  console.log(getTodoList);

  useEffect(() => {
    if (data) {
      dispatch(
        setProject({
          id: parsedProjectId,
          ...data,
        })
      );

      console.log(data);
    }
  }, [data, dispatch, parsedProjectId]);

  // 달력에 종료 날짜까지 표시하기 위해 종료 날짜를 하루 미루는 로직 추가
  const addOneDay = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
  };

  // 현재 시간 기반 D+ 꼐산 함수
  const calculateDday = (isoString?: string): string => {
    if (!isoString) return "";
    const startDate = new Date(isoString);
    const today = new Date();

    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return `D+${diffDays}`;
  };

  // 오늘 날짜 문자열
  const todayStr = formatTodoDate(new Date());

  // 오늘 날짜 + 상태 순서대로 해당하는 일정 반환
  const todayTodos = getTodoList
    ?.filter((todo) => {
      const startStr = formatTodoDate(new Date(todo.startDate));
      return startStr === todayStr;
    })
    .sort((a, b) => a.status - b.status);

  console.log(todayTodos);

  return (
    <Container>
      <Description />
      <ContentWrapper>
        <CalendarWrapper>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={
              getTodoList?.map((todo) => ({
                title: todo.todoName,
                start: todo.startDate,
                end: todo.endDate
                  ? formatTodoDate(addOneDay(new Date(todo.endDate)))
                  : undefined,
                textColor: todo.isMyTodo
                  ? theme.colors.textWhite
                  : theme.colors.textLight,
                backgroundColor: todo.isMyTodo
                  ? theme.colors.primary
                  : theme.colors.secondary,
                borderColor: theme.colors.border,
              })) ?? []
            }
          />
        </CalendarWrapper>
        <SideWrapper>
          <ProjectDayCounter>
            <p>TOGETHER SINCE</p>
            <p>{data?.projectCreatedTime}</p>
            <p>{calculateDday(data?.projectCreatedTime)}</p>
          </ProjectDayCounter>
          <TodoListWrapper>
            <h2>ToDo List</h2>
            <TodoList>
              {todayTodos?.map((todo) => (
                <TodoListCard key={todo.todoId}>
                  <TodoTitle>
                    <h3>{todo.todoName}</h3>
                    <p>{todo.assignee?.map((user) => user.name).join(", ")}</p>
                  </TodoTitle>
                  <div>
                    {todo.status === 0 ? (
                      <Label>시작 전</Label>
                    ) : todo.status === 1 ? (
                      <Label colors="blue" textColors="textWhite">
                        진행 중
                      </Label>
                    ) : (
                      <Label colors="secondary" textColors="text">
                        완료
                      </Label>
                    )}
                  </div>
                </TodoListCard>
              ))}
            </TodoList>
          </TodoListWrapper>
        </SideWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
