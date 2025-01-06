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
import AllUsers from './pages/AllUsers';
import Conference from './pages/forms/Conference';
import Fellowship from './pages/forms/Fellowship';
import Grant from './pages/forms/Grant';
import Journal from './pages/forms/Journal';
import Patent from './pages/forms/Patent';
import Book_BookChapter from './pages/forms/Book_BookChapter';
import UserAchievements from './pages/UserAchievements';
import AllAchievements from './pages/AllAchievements';
import { AuthProvider } from './contexts/AuthContext';
import ErrorPage from './pages/ErrorPage';
import { Toaster } from 'react-hot-toast';
import About from './pages/About';
import Aboutfooter from './pages/About';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (<>
//       <Home />
//     </>
//     ),
//   },
//   {
//     path: "/signin",
//     element: (<>
//       <Signin />
//     </>
//     ),
//   },
//   {
//     path: "/signup",
//     element: (<>
//       <Signup />
//     </>
//     ),
//   },
//   {
//     path: "/forgot-password",
//     element: (
//       <ForgotPassword />
//     ),

//   },
//   // {
//   //   path: "/forgotpass/checkmail",
//   //   element: (<>
//   //     <CheckMail />
//   //   </>
//   //   ),

//   // },
//   // {
//   //   path: "//forgotpass/checkmail/newpass",
//   //   element: (<>
//   //     <NewPass />
//   //   </>
//   //   ),

//   // },
//   // {
//   //   path: "/forgotpass/checkmai/newpass/reset",
//   //   element: (<>
//   //     <Passreset />
//   //   </>
//   //   ),

//   // },

//   {
//     path: "/user/profile",
//     element: (<>
//       <Profile />
//     </>
//     ),
//   },
//   {
//     path: "/user/dashboard",
//     element: (<>
//       <Dashboard />
//     </>
//     ),
//   },

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
    path: "/user/form/book_bookChapter",
    element: (<>
      <Book_BookChapter />
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
    path: "/admin/all-users",
    element: (<>
      <AllUsers />
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
    element: <div><About /></div>,
  },
 {
    path:"/",
    element:(<><Aboutfooter /></>)
  },
  {
    path: "*",
    element: (<><ErrorPage /></>),
  },
]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <NextUIProvider>
//     <AuthProvider>
//       <div><Toaster /></div>
//       {/* <main className="dark text-foreground bg-background"> */}
//       <RouterProvider router={router} />
//       {/* </main> */}
//     </AuthProvider>
//   </NextUIProvider>

// );
// reportWebVitals();

import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
