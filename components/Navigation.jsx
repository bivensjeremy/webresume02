'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@heroui/navbar";
import {Avatar} from "@heroui/avatar";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { useState } from "react";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} position="static" maxWidth="full">
            <NavbarBrand>
                <Link href="/" color="foreground" onClick={() => setIsMenuOpen(false)}>
                <Avatar name="Jeremy" src="/pixar_image-2.png" />
                <div className="pl-1">
                    <p className="font-bold text-inherit text-xl">Jeremy Bivens</p>
                    <p className="text-md">Web Developer</p>
                </div>
                </Link>
            </NavbarBrand>

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {/* Desktop Navigation */}
            <NavbarContent justify="end" className="hidden sm:flex">
                {siteConfig.navItems.map(({ label, href }) => (
                <NavbarItem key={label}>
                    <Link href={href} color="foreground" isBlock>
                    {label}
                    </Link>
                </NavbarItem>
                ))}
            </NavbarContent>

            {/* Mobile Navigation */}
            <NavbarMenu className="text-center pt-24">
                {siteConfig.navItems.map(({ label, href }, index) => (
                <NavbarMenuItem key={`${label}-${index}`}>
                    <Link
                    href={href}
                    color="foreground"
                    className="text-2xl pb-10"
                    onClick={() => setIsMenuOpen(false)} // 👈 closes the menu
                    >
                    {label}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default Navigation;