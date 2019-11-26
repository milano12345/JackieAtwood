import React from "react";

import { Icons, IconDiv } from "../styling/AboutStyle";

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <div>
                <h1>Fun Facts!</h1>
                <p>Geography?</p>
                <p>Hobbies?</p>
                <h1>Skills/Knowledge</h1>
            </div>
            <IconDiv>
                <a target="_blank" href="https://github.com/JaxAtwood"><Icons src="/GitHubLogo.png" alt="github icon" title="GitHub"></Icons></a>
                <a target="_blank" href="https://www.linkedin.com/in/jackie-atwood/"><Icons src="/LinkedInLogo.png" alt="Linkedin icon" title="LinkedIn"></Icons></a>
                <a target="_blank" href="Resume.pdf"><Icons src="/PDficon.png" alt="PDF icon" title="PDF Resume"></Icons></a>
                <a target="_blank" href="mailto:webdevjackie@gmail.com"><Icons src="/Emailicon.png" alt="Envelope icon"></Icons></a>
            </IconDiv>
        </div>
    )
}