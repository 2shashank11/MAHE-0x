import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar } from "@nextui-org/react";


function Nav() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        <Link to="/">Home</Link>,
        <Link to="/user/dashboard">Dashboard</Link>,
        <Link to="/user/achievemnts">My Achievements</Link>,
        <Link to="/user/profile">Profile</Link>,
        <Link to="/" className=" font-semibold text-red-500">Log out</Link>
    ];


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" >
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold">MAHE0X</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link to="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/user/dashboard">Dashboard</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/user/achievements">
                        My Achievements
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link to="/" className=" font-semibold text-red-500">Logout</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link to="/user/profile">
                        <Avatar isFocusable /* src=" " */ />
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
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
        </Navbar>
    );
}

export default Nav;