import styled from "styled-components";

const Header = styled.div `
    width: 100%;
    margin: 0 auto;
    background: gray;
`

const HeaderCard = styled.div `
    width: 450px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0 auto;
`

const RoundLogo = styled.img `
    width: 160px;
    height: 0 auto;
    // background: green;
    border-radius: 100%;
    // box-shadow: 1px 1px 10px 1px black;
    margin: 0 auto;
`

const TextLogo = styled.img `
    width: 0 auto;
    height: 100px;
    margin-top: -20px;
`

const Title = styled.img `
    width: 0 auto;
    height: 45px;
    margin-top: -20px;
`

export { Header, HeaderCard, RoundLogo, TextLogo, Title };