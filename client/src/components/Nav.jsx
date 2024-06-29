import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('../pages/Home');
    }

    const handleDashboardClick = () => {
        navigate('../pages/Dashboard');
    }

    const menuItems = [
        <Link to="../pages/Home.jsx">Home</Link>,
        "Dashboard",
        "Profile",
        "Log Out",
    ];


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold">MAHE0x</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link onClick={handleHomeClick}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link onClick={handleDashboardClick}>
                        Dashboard
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Avatar /* src=" " */ />
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