import React from "react";

import { Circle, SplashDiv, SplashCard, Overlap, Pitch, PitchTitle } from "../styling/SplashStyle";

export default function Splash() {
    return (
        <div>
            <Pitch>
            <PitchTitle>Pitch/Blurb</PitchTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Pitch>
            <SplashDiv>
                <Overlap>
                <Circle>design</Circle>
                <SplashCard>consult, come together, uniquely yours, custom-built/scratch, no templates</SplashCard>
                </Overlap>
                <Overlap>
                <Circle>develop</Circle>
                <SplashCard>using modern lang's and practices, using most relevant libraries and frameworks</SplashCard>
                </Overlap>
                <Overlap>
                <Circle>function</Circle>
                <SplashCard>fully functional website, deployed via hosting site of your choice, some recommendations</SplashCard>
                </Overlap>
                <Overlap>
                <Circle>support</Circle>
                <SplashCard>new ideas/design change?, tech support? We recommend (Link), let's grow together</SplashCard>
                </Overlap>
            </SplashDiv>
        </div>
    )
}