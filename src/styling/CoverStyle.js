import styled from "styled-components";

const CoverCard = styled.div `
    display: flex;
    // height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 15%;
    line-height: 4rem;
    font-size: 1.8rem;
    // margin-top: 20%;

    h2 {
        margin-top: 0;
    }
`

const Covered = styled.div `
    background: #808080;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    text-shadow: 1px 1px 10px teal;
    margin-top: 50px;
    background-image: radial-gradient(#14bdbd, black);
    position: absolute;
    top: -50px;
    line-height: 30px;
    }
`

const Down = styled.img `
    width: 100px;
    height: 0 auto;
    border-radius: 100%;
    margin: 0 auto;
    padding-bottom: 20px;

    &:hover {
        transform: scale(1.2);
    }
`

export { Covered, Down, CoverCard }