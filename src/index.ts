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
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: #f4eff5;
font-family: 'Roboto Flex', sans-serif;

header{
    width: 1142px;
    
}

main{
    width: 1142px;
    height: 622px;
    overflow-y: scroll;
    overflow-x: hidden;
}

`

export default RootGlobalStyle