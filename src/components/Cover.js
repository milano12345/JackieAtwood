import React from "react";
import "../styling/CoverStyle.js";
import { Code, Typer, Button } from "../styling/CoverStyle";
import Typewriter from "./Typewriter";
// import Typewriter from 'typewriter-effect';
// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';

 export default function Cover() {

    return (
       <div>
           <Code src="/codeimg.png" alt="blurred code" className="codeimg"></Code>
           <Typer>
            <Typewriter />
           </Typer>
           <Button href="/nav/home" type="button">Enter Here</Button>
      </div>
    )
}

           /* 
           <Typewriter
                onInit={(typewriter) => {

                // typewriter.typeString(`Hi. This is my website.`)
                // .callFunction(() => {
                // })
                // .deleteChars(23)

                typewriter.typeString(`I'm Jackie Atwood.`)
                .callFunction(() => {
                })
                
                .pauseFor(4500)
                typewriter.typeString(`<br> I'm a budding web developer.`)
                .callFunction(() => {
                })
                .pauseFor(4500)

                typewriter.typeString(`<br> Let's Grow Together....`)
                .callFunction(() => {
                })
                .changeDelay('natural')
                .start();
                 }}
            />
            
            </Typer> */
      

