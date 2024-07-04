import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const cookies = new Cookies();

        const token = cookies.get('token');
        if (token) {
            try {
                const user = jwtDecode(token);
                if (user) {
                    setIsLoggedIn(true);
                    setAuthUser(user);
                    localStorage.setItem('isLoggedIn', true);
                }
            } catch (error) {
                console.error("Invalid token", error);
            }
        }
        else {
            setIsLoggedIn(false);
            localStorage.removeItem('isLoggedIn');
        }
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            const cookies = new Cookies();
            const token = cookies.get('token');
            if (token) {
                try {
                    const user = jwtDecode(token);
                    console.log(user)
                    if (user) {
                        setIsLoggedIn(true);
                        setAuthUser(user);
                        localStorage.setItem('isLoggedIn', true);
                    }
                } catch (error) {
                    console.error("Invalid token", error);
                }
            }
        }
        else {
            setAuthUser(null);
            localStorage.removeItem('authUser');
        }
    }, [isLoggedIn]);

    const value = { authUser, setAuthUser, isLoggedIn, setIsLoggedIn };

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
};
