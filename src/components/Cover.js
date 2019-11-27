import React from "react";
import { Covered, Down, CoverCard, CodeImg, Enter } from "../styling/CoverStyle";


export default function Cover() {
    return (
       <Covered>
           <CodeImg src="/codeimg.png"></CodeImg>
           <CoverCard>
            <h1>I'm 
                <br />
                Jackie Atwood. 
                <br />
                I'm a budding web developer.</h1>
            <h2>Let's Grow Together.</h2>
            <Down><Enter href="/nav/welcome" alt="Welcome Page">Enter Here</Enter></Down>

            </CoverCard>
       </Covered>
    )
}