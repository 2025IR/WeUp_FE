import Description from "@/components/project/home/Description";
import { useProjectInfo } from "@/query/project/useProjectInfo";
import { setProject } from "@/store/project";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarWrapper, Container } from "./style";
import { useGetTodoList } from "@/query/todo/useGetTodoList";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme();
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const dispatch = useDispatch();

  const { data } = useProjectInfo(parsedProjectId);
  const { data: getTodoList } = useGetTodoList(parsedProjectId);

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
  return (
    <Container>
      <Description />
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={
            getTodoList?.map((todo) => ({
              title: todo.todoName,
              start: todo.startDate,
              end: todo.endDate ?? undefined,
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
    </Container>
  );
};

export default Home;
