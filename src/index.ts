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
width: 1142px;
height: 100vh;
margin:0 auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: #f4eff5;
font-family: 'Roboto Flex', sans-serif;
header{
    width: 100%;
}

main{
    width: 100%;
    height: 622px;
    overflow-y: scroll;
    overflow-x: hidden;
}

`

export default RootGlobalStyle