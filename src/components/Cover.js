import React from "react";
import { Covered, Down, CoverCard, CodeImg, Enter, H1 } from "../styling/CoverStyle";


export default function Cover() {
    return (
       <Covered>
           <CodeImg src="/codeimg.png"></CodeImg>
           <CoverCard>
            <H1>I'm 
                <br />
                Jackie Atwood. 
                <br />
                I'm a budding web developer.</H1>
            <h2>Let's Grow Together.</h2>
            <Down><Enter href="/nav/welcome" alt="Welcome Page">Enter Here</Enter></Down>

            </CoverCard>
       </Covered>
    )
}