import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Conference from './pages/forms/Conference';
import Fellowship from './pages/forms/Fellowship';
import Grant from './pages/forms/Grant';
import Journal from './pages/forms/Journal';
import Patent from './pages/forms/Patent';
import Publication from './pages/forms/Publication';
import UserAchievements from './pages/UserAchievements';
import AllAchievements from './pages/AllAchievements';
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <Home />
    </>
    ),
  },
  {
    path: "/signin",
    element: (<>
      <Signin />
    </>
    ),
  },
  {
    path: "/signup",
    element: (<>
      <Signup />
    </>
    ),
  },
  {
    path: "/forgot-password",
    element: (<>
      <ForgotPassword />
    </>
    ),
  },
  {
    path: "/user/profile",
    element: (<>
      <Profile />
    </>
    ),
  },
  {
    path: "/user/dashboard",
    element: (<>
      <Dashboard />
    </>
    ),
  },

  {
    path: "/user/form/conference",
    element: (<>
      <Conference />
    </>
    ),
  },
  {
    path: "/user/form/fellowship",
    element: (<>
      <Fellowship />
    </>
    ),
  },
  {
    path: "/user/form/grant",
    element: (<>
      <Grant />
    </>
    ),
  },
  {
    path: "/user/form/journal",
    element: (<>
      <Journal />
    </>
    ),
  },
  {
    path: "/user/form/patent",
    element: (<>
      <Patent />
    </>
    ),
  },
  {
    path: "/user/form/publication",
    element: (<>
      <Publication />
    </>
    ),
  },
  {
    path: "/user/achievements",
    element: (<>
      <UserAchievements />
    </>),
  },
  {
    path: "/all-achievements",
    element: (<>
      <AllAchievements />
    </>),
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <AuthProvider>
      {/* <main className="dark text-foreground bg-background"> */}
      <RouterProvider router={router} />
      {/* </main> */}
    </AuthProvider>
  </NextUIProvider>

);
reportWebVitals();