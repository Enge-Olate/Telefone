import styled, {createGlobalStyle} from "styled-components";

const RootGlobalStyle = createGlobalStyle`
*, a{
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
font-family: 'Roboto-Flex', sans-serif;
background-color: #f4eff5;
}
`
export const Container = styled.div`
margin-top: 106px;
display: flex;
flex-direction: column;
align-items: center;

`

export default RootGlobalStyle