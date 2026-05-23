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
    margin-top: 16px;
    overflow-y: scroll;
    overflow-x: hidden;
}
// Media query para smartphone
@media(max-width: 768px){
    width: 100%;
    height: auto;
    padding: 16px;
    justify-content: flex-start;
    align-items: stretch;
    main{
        height: auto;
        margin-top: 12px;
        overflow-y: visible;
    }
}
`

export default RootGlobalStyle