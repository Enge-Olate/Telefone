import styled from "styled-components";

export const ContainerList = styled.div`
display: flex;
width: 1142px;
height: 144px;
flex-direction: column;
align-items: flex-start;
gap: 42px;

`

export const SectionList = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;

h2{
    margin-top: 19px;
    margin-left: 26px;
    margin-bottom: 20.5px;
    font-size: 32px;
    color: #9f89a4;
}
div{
    width: 1142px;
    height: 69px;
    padding: 16px;
    gap: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    background-color: #fcfcfc;
    border-radius: 12px;
}
`
export const Avatar = styled.p`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: #B9A7F8;
color: #FAF8FF;
border-radius: 50%;
font-size: 20px;
`