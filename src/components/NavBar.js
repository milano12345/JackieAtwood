import React from "react";
import { NavBox, Anchors } from "../styling/NavStyle";

export default function NavBar() {
    return (
        <NavBox>
            <Anchors href="/">Welcome</Anchors>
            <Anchors href="/about">About Me</Anchors>
            <Anchors href="/work">My Work</Anchors>
            <Anchors href="/hire">Hire Me</Anchors>
            <Anchors href="/contact">Contact</Anchors>
        </NavBox>
    )
}