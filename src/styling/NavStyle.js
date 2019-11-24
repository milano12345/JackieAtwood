import styled from "styled-components";

const NavBox = styled.div `
    border: black solid 2px;
    background: black;
    height: 80px;
    display: flex;
    justify-content: space-around;
    padding-left: 170px;
    padding-right: 170px;
`

const Anchors = styled.a `
    // border: red solid 1px;
    text-decoration: none;
    color: gray;
    font-family: 'Lato', sans-serif;
    display: flex;
    width: 130px;
    align-items: center;
    justify-content: center;
`

export { NavBox, Anchors };