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
    // height: 3vh;
    // width: 3vw;
    // border: solid 1px red;
    width: 100%;
    margin-top: 4em;
    h2 {
        margin-top: 0;
    }
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
    font-size: 4vh;
    }
`

const Down = styled.div `
    border: solid black 2px;
    background: white;
    color: black;
    width: 15%;
    height: 0 auto;
    margin: 0 auto;
    &:hover {
        transform: scale(1.2);
        background: #14bdbd;
    }
`

const Enter = styled.div `
    color: black;
    font-weight: bold;
    font-size: 2vw;
    display: flex;
    justify-content: center;
`

export { Covered, Down, CoverCard, CodeImg, Enter }