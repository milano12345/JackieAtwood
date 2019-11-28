import styled from "styled-components";

const CodeImg = styled.img `
    width: 100%;
    position: fixed;
    z-index: -1;
    filter: blur(2px);
    -webkit-filter: blur(2px);
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;
`

const CoverCard = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    line-height: 1.8em;
    width: 75%;
    margin-top: 25%;

`
const H1 = styled.h1 `
    font-size: 40px;
    // border: red solid 1px;
    min-width: 72%;
    height: 100%;
    margin: 0 auto;
    line-height: 1.1;
    position: relative;
    margin-bottom: 30px;
`
const Covered = styled.div `
    justify-content: center;
    box-shadow: inset 0 0 200px black;
    color: white;
    align-items: center;
    text-shadow: 1px 1px 10px teal;
    line-height: 30px;
    position: absolute; 
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;
    // border: red solid 1px;
    }
`

const Down = styled.button `
    border: solid black 2px;
    background: white;
    color: black;
    max-width: 0 auto;
    max-height: 20%;
    margin: 0 auto;
    cursor: default;
    font-size: 75%;

    &:hover {
        transform: scale(1.2);
        background: #14bdbd;
    }
`

const Enter = styled.a `
    color: black;
    font-weight: bold;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;

    padding: 0;
`

export { Covered, Down, CoverCard, CodeImg, Enter, H1 }