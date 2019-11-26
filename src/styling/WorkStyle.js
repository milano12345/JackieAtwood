import styled from "styled-components";

const ProjectDiv = styled.div `
    border: #808080 solid 1px;
    background: #808080;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
    box-shadow: 1px 1px 20px 1px #888888;
`

const ProjectCard = styled.h2 `
    border: 1px #14bdbd solid;
    background: #14bdbd;
    width: 20%;
    height: 180px;
    box-shadow: 1px 1px 20px 1px #888888;

    &:hover {
        box-shadow: 1px 1px 20px 5px #000000;
        z-index: 2;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1.1);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1.1);   
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1.1);
        transition: all 200ms ease-in;
        transform: scale(1.1);
    }
`
const CollabDiv = styled.div `
    border: #808080 solid 1px;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
    background: #808080;
    box-shadow: 1px 1px 20px 1px #888888;
`
const CollabCard = styled.h2 `
    border: 1px #14bdbd solid;
    background: #14bdbd;
    width: 20%;
    height: 180px;
    box-shadow: 1px 1px 20px 1px #888888;

    &:hover {
        box-shadow: 1px 1px 20px 5px #000000;
        z-index: 2;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1.1);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1.1);   
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1.1);
        transition: all 200ms ease-in;
        transform: scale(1.1);
    }
`
const TestDiv = styled.div `
    border: #808080 solid 1px;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    background: #808080;
    box-shadow: 1px 1px 20px 1px #888888;
`

const TestCard = styled.h2 `
    border: 1px #14bdbd solid;
    background: #14bdbd;
    height: 180px;
    width: 10%;

    &:hover {
        box-shadow: 1px 1px 20px 5px #000000;
        z-index: 2;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1.1);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1.1);   
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1.1);
        transition: all 200ms ease-in;
        transform: scale(1.1);
    }
`

export { ProjectDiv, ProjectCard, CollabDiv, CollabCard, TestDiv, TestCard };