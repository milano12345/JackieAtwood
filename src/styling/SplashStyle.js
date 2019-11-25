import styled from "styled-components";

const Pitch = styled.div `
    border: 1px solid gray;
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    margin-top: 10px;
    box-shadow: 1px 1px 10px 1px #888888;
`

const PitchTitle = styled.h1 `
    margin: 0;
`

const Circle = styled.p `
    border: black solid 2px;
    background: #14bdbd;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Caveat Brush', cursive;
    font-size: 30px;
    margin: 30px 38px;
    z-index: 1;
    margin-top: 20px;
    box-shadow: 1px 1px 10px 1px #888888;
`

const SplashDiv = styled.div `
    // border: green solid 1px;
    display: flex;
    justify-content: space-around;
    padding-left: 90px;
    padding-right: 90px;
`

const SplashCard = styled.p `
    border: #14bdbd solid 1px;
    width: 175px;
    height: 100px;
    margin-top: -80px;
    padding-top: 60px;
    z-index: -1;
    position: relative;
    box-shadow: 1px 1px 10px 1px #888888;
`

const Overlap = styled.div `
    // border: black solid 1px;
    // border: pink solid 1px;
    // height: 
`

export { Circle, SplashDiv, SplashCard, Overlap, Pitch, PitchTitle };