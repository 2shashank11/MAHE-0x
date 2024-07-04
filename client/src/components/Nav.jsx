import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar, Button } from "@nextui-org/react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";


function Nav() {
    const Navigate = useNavigate();
    const { authUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        console.log("user: ", authUser)
        console.log("loggedin: ", isLoggedIn)
    }, [isLoggedIn, authUser])

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleUserLogout = async (e) => {
        e.preventDefault()
        const response = axios.post('/api/logout', { withCredentials: true })
        console.log(response)
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
        Navigate('/')
    }

    const menuItems = [
        <Link to="/">Home</Link>,
        <Link to="/user/dashboard">Dashboard</Link>,
        <Link to="/user/achievements">My Achievements</Link>,
        <Link to="/user/profile">Profile</Link>,
        <Link to="/all-achievements">All Details</Link>,
        <Button color="danger" onClick={handleUserLogout}>Logout</Button>
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" isBordered >
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="text-xl font-bold">MAHE0X</p>
                    {authUser?.role === "ADMIN" ? <p className="text-base">&nbsp; ADMIN</p>
                         : null}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link to="/">Home</Link>
                </NavbarItem>
                {(isLoggedIn) ?
                    <>
                        <NavbarItem>
                            <Link to="/user/dashboard">Dashboard</Link>
                        </NavbarItem>
                        
                        {authUser?.role !== "ADMIN" ? <NavbarItem>
                            <Link to="/user/achievements">
                                My Achievements
                            </Link>
                        </NavbarItem>
                         : null}
                        

                        {authUser?.role === "ADMIN"
                            ?
                            <NavbarItem>
                                <Link to="/admin/all-users">
                                    All Users
                                </Link>
                            </NavbarItem>
                            : null}
                    </>
                    : null}
            </NavbarContent>

            {(isLoggedIn) ?
                <>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button className="max-sm:hidden" color="danger" onClick={handleUserLogout}>Logout</Button>
                            
                        </NavbarItem>
                        <NavbarItem className="lg:flex">
                            <Link to="/user/profile">
                                <Avatar isFocusable src='/images/defaultProfileImage.png' isBordered color="success" />
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </>
                : <Link className="md:hidden text-blue-600" color="primary" to="/signin">Sign In</Link>}
            {isLoggedIn ?
                <>
                    <NavbarMenu>
                        {authUser?.role === "ADMIN"
                            ?
                            <NavbarItem>
                                <Link to="/admin/all-users">All Users </Link>
                            </NavbarItem>
                            : null}
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                    }
                                    className="w-full"
                                    href="#"
                                    size="lg"
                                >
                                    {item}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </>
                :
                <>
                    <NavbarMenu>
                        <NavbarMenuItem><Link to="/">Home</Link></NavbarMenuItem>
                    </NavbarMenu>
                </>
            }
        </Navbar>
    );
}

export default Nav;