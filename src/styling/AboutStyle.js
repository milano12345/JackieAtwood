import styled from "styled-components";

const IconDiv = styled.div `
    // background: teal;
    width: 35%;
    height: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`

const Icons = styled.img `
    width: 100px;
    height: 0 auto;
    border-radius: 100%;
    margin-top: 10px;

    &:hover {
        opacity: 0.5;
        transform: scale(1.2);
    }
`



export { Icons, IconDiv };