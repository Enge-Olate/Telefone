import styled, {createGlobalStyle} from "styled-components";

const RootGlobalStyle = createGlobalStyle`
*, a{
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #f4eff5;
align-items: center;
font-family: 'Roboto Flex', sans-serif;

`

export default RootGlobalStyle