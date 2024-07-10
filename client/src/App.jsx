import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";

/* Pages import below */
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Conference from "./pages/forms/Conference";
import FellowshipForm from "./pages/forms/Fellowship";
import GrantForm from "./pages/forms/Grant";
import JournalForm from "./pages/forms/Journal";
import PatentForm from "./pages/forms/Patent";
import Publication from "./pages/forms/Publication";
import UserAchievements from "./pages/UserAchievements";
import AllUsers from "./pages/AllUsers";
import AllAchievements from "./pages/AllAchievements";
import About from "./pages/About";
import Aboutfooter from "./components/Aboutfoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <Aboutfooter />,
    },
    {
        path: "/signin",
        element: <Signin />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/user/profile",
        element: <Profile />,
    },
    {
        path: "/user/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/user/form/conference",
        element: <Conference />,
    },
    {
        path: "/user/form/fellowship",
        element: <FellowshipForm />,        /* <Fellowship/> <--- this was in the original App.js*/
    },
    {
        path: "/user/form/grant",
        element: <GrantForm />,             /* <Grant/> <--- this was in the original App.js*/
    },
    {
        path: "/user/form/journal",
        element: <JournalForm />,          /* <Journal/> <--- this was in the original App.js*/
    },
    {
        path: "/user/form/patent",
        element: <PatentForm />,            /* <Patent/> <--- this was in the original App.js*/
    },
    {
        path: "/user/form/publication",
        element: <Publication />,
    },
    {
        path: "/user/achievements",
        element: <UserAchievements />,
    },
    {
        path: "/admin/all-users",
        element: <AllUsers />,
    },
    {
        path: "/all-achievements",
        element: <AllAchievements />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]);


export default function App() {
    return (
        <NextUIProvider>
            <AuthProvider>
                <Toaster />
                <RouterProvider router={router} />
            </AuthProvider>
        </NextUIProvider>
    );
}