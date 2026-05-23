import styled from "styled-components";

export const Section = styled.section`

width: 90%;
padding: 15px;
display: flex;
gap: 20px;
justify-content: flex-end;
@media(max-width: 768px){
    padding:0;
    width:100%;
}
`

export const IconButton = styled.button`
color: #2F5883;
background: none;
border: none;
font-size: 24px;
cursor: pointer;

&:hover{
    color: #B9A7F8;
}
@media(max-width: 768px){
    font-size: 18px;
}
`