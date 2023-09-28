import { ROUTES_TASKS, ROUTES_TASKS_ALL, ROUTES_TASKS_ME } from '@/constants';
import AllTasks from '@/pages/all-tasks';
import Login from '@/pages/login';
import MyTasks from '@/pages/my-tasks';
import Task from '@/pages/task';
import { Navigate } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: ROUTES_TASKS,
    element: <Task />,
    children: [
      {
        path: ROUTES_TASKS_ALL,
        element: <AllTasks />,
      },
      {
        path: ROUTES_TASKS_ME,
        element: <MyTasks />,
      },
      {
        path: '/task',
        element: <Navigate to={ROUTES_TASKS_ALL} replace />,
      },
    ],
  },
];
