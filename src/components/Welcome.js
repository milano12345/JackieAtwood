import React from "react";

import Splash from "./Splash";

import { Header, HeaderCard, RoundLogo, TextLogo, Title } from "../styling/Images";


export default function Welcome() {
    return (
        <div>
        <Header>
            <HeaderCard>
            <RoundLogo src="IconLogo.png" alt="round logo"></RoundLogo>
            <TextLogo src="NameLogo.png" alt="text logo"></TextLogo>
            <Title src="HeaderLogo.png" alt="text header"></Title>
            </HeaderCard>
        </Header>
        <Splash />
        </div>
    )
}