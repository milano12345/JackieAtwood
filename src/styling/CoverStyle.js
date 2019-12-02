import styled from 'styled-components';

const Button = styled.a `
  border: solid white 1px;
  text-shadow: 0 0 2px teal;
  background: white;
  color: black;
  max-width: 5em;
  font-size: 1.8em;
  font-weight: bold;
  max-height: 50px;
  margin: 0 auto;
`

const Typer = styled.div`
    color: white;
    text-shadow: 0 0 10px teal;
    font-family: Helvetica, Arial, sans-serif;
    border: red solid 1px;
    margin: 0 auto;
    margin-top: 20%;
    letter-spacing: -0.2;
    display: flex;
    justify-items: center;
    position: fixed;
    font-size: 2em;
    max-width: 20%;
`

const Code = styled.img `
    width: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(3px);
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;
`

export { Typer, Code, Button }


