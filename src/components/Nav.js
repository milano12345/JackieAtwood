import React from "react";

import { NavLink } from "react-router-dom"
import { NavBox } from "../styling/NavStyle";

export default function Nav() {
    return (
        <NavBox>
            <NavLink path to="/nav/home">Welcome</NavLink>
            <NavLink path to="/nav/about">About Me</NavLink>
            <NavLink path to="/nav/work">My Work</NavLink>
            <NavLink path to="/nav/hire">Hire Me</NavLink>
            <NavLink path to="/nav/contact">Contact</NavLink>
        </NavBox>
    )
}
