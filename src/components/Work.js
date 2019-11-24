import React from "react";

import { ProjectDiv, ProjectCard, CollabDiv, CollabCard, TestDiv, TestCard } from "../styling/WorkStyle";

export default function Work() {
    return (
        <div>
            <h1>Some of My Work</h1>
            <h1>Design Projects</h1>
                <ProjectDiv>
                    <ProjectCard>Project 1</ProjectCard>
                    <ProjectCard>Project 2</ProjectCard>
                    <ProjectCard>Project 3</ProjectCard>
                    <ProjectCard>Project 4</ProjectCard>
                </ProjectDiv>
                <h1>Collaborative Projects</h1>
                <CollabDiv>
                    <CollabCard>Project 1</CollabCard>
                    <CollabCard>Project 2</CollabCard>
                    <CollabCard>Project 3</CollabCard>
                    <CollabCard>Project 4</CollabCard>
                </CollabDiv>
                <h1>Endorsements / Testimonials</h1>
                <TestDiv>
                    <TestCard>Person 1</TestCard>
                    <TestCard>Person 2</TestCard>
                    <TestCard>Person 3</TestCard>
                    <TestCard>Person 4</TestCard>
                    <TestCard>Person 5</TestCard>
                    <TestCard>Person 6</TestCard>
                </TestDiv>
        </div>
    )
}