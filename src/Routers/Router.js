import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../Pages/Login";
import DashboardLayout from "../Pages/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Students from "../Pages/Students";
import Teachers from "../Pages/Teachers";
import Events from "../Pages/Events";
import Settings from "../Pages/Settings";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "students", element: <Students /> },
        { path: "teachers", element: <Teachers /> },
        { path: "events", element: <Events /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);
}
