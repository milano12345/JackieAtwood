import styled from "styled-components";

const ContactForm = styled.div `
    border: magenta solid 1px;
    display: flex;
    margin: 0 auto;
    width: 40%;
    justify-content: center;
    flex-direction: column;
`

const Label = styled.label `
    color: magenta;
    display: flex;
    // background: green;
    font-size 20px;
`

const FormBottom = styled.div `
    border: teal solid 1px;
`
const LabelBottom = styled.label `
    color: blue;
`


export { ContactForm, Label, FormBottom, LabelBottom };