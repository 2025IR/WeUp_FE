import { RouteObject } from "react-router-dom";
import Projects from "../pages/Projects";
import ProjectLayout from "../components/layout/projectLayout/ProjectLayout";
import Home from "../pages/project/Home";
import Team from "../pages/project/Team";
import Board from "../pages/project/Board";
import Post from "../pages/project/Board/Post";
import PostWrite from "../pages/project/Board/PostWrite";
import Meeting from "../pages/project/Meeting";
import AppLayout from "../components/layout/appLayout/AppLayout";
import PublicLayout from "@/components/layout/publicLayout/PublicLayout";
import Task from "@/pages/project/Task";
import Auth from "@/pages/Auth";
import MeetLayout from "@/components/layout/meetLayout/MeetLayout";
import WaitingRoom from "@/pages/project/WaitingRoom";
import Chat from "@/pages/project/Chat";

const routes: RouteObject[] = [
  {
    path: "meeting/:projectId",
    element: <Meeting />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ path: "auth", element: <Auth /> }],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/:projectId",
        element: <ProjectLayout />,
        children: [
          { path: "home", element: <Home /> },
          { path: "task", element: <Task /> },
          { path: "team", element: <Team /> },
          { path: "board", element: <Board /> },
          { path: "post/:postId", element: <Post /> },
          { path: "post/:postId/edit", element: <PostWrite /> },
          { path: "post/new", element: <PostWrite /> },
          {
            path: "meet",
            element: <MeetLayout />,
            children: [
              { path: "chat", element: <Chat /> },
              { path: "waiting", element: <WaitingRoom /> },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
