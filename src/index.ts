import styled, {createGlobalStyle} from "styled-components";

const RootGlobalStyle = createGlobalStyle`
*, a{
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
}
body{
    font-family: 'Roboto Flex', sans-serif;
    background-color: #f4eff5;
}
`
export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

header{
    width: 408px;
    height: 74px;
    margin-top: 100px;
    
}

main{
    width: 1142px;
    height: 622px;
    margin-top: 16px;
    overflow-y: scroll;
    overflow-x: hidden;
}

`

export default RootGlobalStyle