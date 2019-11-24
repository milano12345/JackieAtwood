import styled from "styled-components";

const ProjectDiv = styled.div `
    border: blue solid 1px;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
`
const ProjectCard = styled.h2 `
    border: 1px #14bdbd solid;
    width: 20%;
    height: 180px;
`
const CollabDiv = styled.div `
    border: blue solid 1px;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
`
const CollabCard = styled.h2 `
    border: 1px #14bdbd solid;
    width: 20%;
    height: 180px;
`
const TestDiv = styled.div `
    border: blue solid 1px;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
`
const TestCard = styled.h2 `
    border: 1px #14bdbd solid;
    height: 180px;
    width: 10%;
`

export { ProjectDiv, ProjectCard, CollabDiv, CollabCard, TestDiv, TestCard };