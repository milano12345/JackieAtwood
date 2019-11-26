import styled from "styled-components";

const Covered = styled.div `
    background: #808080;
    width: 100%;
    height: 120%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    text-shadow: 1px 1px 10px teal;
    background-size: 100%;
    margin-top: 50px;
    background-image: radial-gradient(#14bdbd, black);
    position: absolute;
    left: 0px;
    top: -150px;
    z-index: -1;
    line-height: 30px;

    h2 {
        line-height: 1px;
        margin-top: 20px;
    }
    img {
        margin-top: -15px;
    }
`

const CoverBG = styled.div `
    // border: green solid 1px;
    // background-image: linear-gradient(to right, red , yellow);
    // position: absolute;
    // left: 0px;
    // top: 0px;
    // z-index: -1;
`

const Down = styled.img `
    width: 100px;
    height: 0 auto;
    border-radius: 100%;
    margin: 0 auto;


    &:hover {
        opacity: 0.5;
        transform: scale(1.2);
    }
`

export { Covered, Down, CoverBG }