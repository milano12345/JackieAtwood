import styled from "styled-components";

const Pitch = styled.div `
    border: 1px solid gray;
    width: 70%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    margin-top: 10px;
    padding-bottom: 5px;
    box-shadow: 1px 1px 10px 1px #888888;
    background: white;
    // box-shadow: 1px 1px 10px 1px #14bdbd;
`

const PitchTitle = styled.h1 `
    margin: 0;
    margin-top: 5px;
`

const Circle = styled.p `
    border: black solid 2px;
    background: #14bdbd;
    border-radius: 100%;
    width: 95px;
    height: 175px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Caveat Brush', cursive;
    font-size: 1.8rem;
    margin: 0 auto;
    z-index: 1;
    margin-top: 20px;
`

const SplashDiv = styled.div `
    // border: green solid 1px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
`

const SplashCard = styled.p `
    border: #14bdbd solid 1px;
    width: 160px;
    display: flex;
    flex-wrap: wrap;
    justify-items: space-around;
    height: 100%;
    // margin: 5px;
    margin-top: -60px;
    padding-top: 80px;
    box-shadow: 1px 1px 10px 1px #888888;
    background: white;
`

const Overlap = styled.div `
    // border: solid blue 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 0 auto;
`

export { Circle, SplashDiv, SplashCard, Overlap, Pitch, PitchTitle };