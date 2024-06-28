import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Avatar, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import {Link } from'react-router-dom'

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <>
        <Navbar shouldHideOnScroll>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand> MAHE0x</NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4">
                <NavbarItem>
                    <Link color="foreground" to="/">
                        Home
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link color="foreground" href="#">
                        My Dashboard
                    </Link>
                </NavbarItem>

                <NavbarItem justify="right">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="your profile" />
                </NavbarItem>

            </NavbarContent>
        </Navbar>
        </>
    );
}

export default Nav;