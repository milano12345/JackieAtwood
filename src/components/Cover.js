import React from "react";
import { Covered, Down, CoverBG } from "../styling/CoverStyle";

export default function Cover() {
    return (
        <CoverBG>
       <Covered>
           <h1>
               I'm
               <br />
               <img src="/NameLogo.png" alt="text logo"></img>
               <br />
               a budding web developer.
           </h1>
           <h2>
               Let's Grow Together.</h2>
           <a href="/nav/welcome"><Down src="/arrowdown2.png"></Down></a>
       </Covered>
       </CoverBG>
    )
}