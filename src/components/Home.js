import React from "react";
import Splash from "./Splash";

import { RoundLogo, TextLogo, Title } from "../styling/Images";


const Home = () => {
    return (
    <div>
                <RoundLogo src="/IconLogo.png" alt="round logo"></RoundLogo>
                <a href="/"><TextLogo src="/NameLogo.png" alt="text logo"></TextLogo></a>
                <Title src="/HeaderLogo.png" alt="text header"></Title>

                <Splash />
			</div>
		
       
    )
}

export default Home;

