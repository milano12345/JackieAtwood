import React from "react";
import { Covered, Down, CoverCard } from "../styling/CoverStyle";
{/* <img src="/NameLogo.png" alt="text logo"></img> */}


export default function Cover() {
    return (
       <Covered>
           <CoverCard>
            <h1>I'm 
                <br />
                Jackie Atwood. 
                <br />
                I'm a budding web developer.</h1>
            <h2>Let's Grow Together.</h2>
            <a href="/nav/welcome"><Down src="/arrowdown2.png"></Down></a>

            </CoverCard>
       </Covered>
    )
}