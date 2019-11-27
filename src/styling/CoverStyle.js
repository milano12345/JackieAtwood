import styled from "styled-components";

const CoverCard = styled.div `
    display: flex;
    height: 100%;
    flex-direction: column;
    // border: 1px solid red;
    justify-content: space-around;
    align-items: space-around;
    width: 100%;
    line-height: 3.5rem;
    font-size: 1.6rem;

    h2 {
        margin-top: 0;
    }
`

const Covered = styled.div `
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