import styled from "styled-components";



export const SectionList = styled.section`
display: flex;
flex-direction: column;
align-items: center;



`
export const GrupoContatos = styled.div`
    width: 100%;
    margin-bottom: 20px;
    
`

export const UlContatos = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`
export const InfoContainer = styled.div`
 width: 1050px;
  height: 69px;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 12px;

  input{
    /* width: 100%; */
    border: none;
    font-size: 16px;
    color: #111111;
    &:focus{
      border-bottom: 1px solid #666;
      outline: none;
      color: #666;
    }
  }
  span {
    margin: 0;
    font-size: 16px;
    color: #111111;
    flex-grow: 1;

    &:nth-of-type(1) {
        font-weight: 500;
    }

    &:nth-of-type(2),
    &:nth-of-type(3) {
      color: #666;
    }
  }
`

export const Letra = styled.h1`
    margin-top: 19px;
    margin-left: 26px;
    margin-bottom: 20.5px;
    font-size: 32px;
    color: #9f89a4;

`




export const Avatar = styled.p`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b9a7f8;
  color: #faf8ff;
  border-radius: 50%;
  font-size: 20px;
  flex-shrink: 0;
`;