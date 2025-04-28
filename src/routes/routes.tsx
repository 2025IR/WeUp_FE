import { RouteObject } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Projects from "../pages/Projects";
import ProjectLayout from "../components/layout/projectLayout/ProjectLayout";
import Home from "../pages/project/Home";
import Team from "../pages/project/Team";
import Board from "../pages/project/Board";
import Meet from "../pages/project/Meet";
import Post from "../pages/project/Board/Post";
import PostWrite from "../pages/project/Board/PostWrite";
import Meeting from "../pages/project/Meet/Meeting";
import AppLayout from "../components/layout/appLayout/AppLayout";
import PublicLayout from "@/components/layout/publicLayout/PublicLayout";

const routes: RouteObject[] = [
  {
    path: "meeting/:projectId",
    element: <Meeting />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
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
          { path: "", element: <Home /> },
          { path: "team", element: <Team /> },
          { path: "board", element: <Board /> },
          { path: "meet", element: <Meet /> },
          { path: "post/:postId", element: <Post /> },
          { path: "post/new", element: <PostWrite /> },
        ],
      },
    ],
  },
];

export default routes;
