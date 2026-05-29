import styled from "styled-components";

export const SectionList = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`
export const GrupoContatos = styled.div`
padding: 16px;
width: 100%;
margin-bottom: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
@media(max-width: 768px){
  padding: 8px;
  margin-bottom: 10px;
}    
`

export const UlContatos = styled.ul`
padding: 0;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
li{
  width: 100%;
}
@media(max-width: 768px){
  width: 100%;
  li{
    width: 100%;
  }
}
`
export const InfoContainer = styled.div`
padding: 16px;
width: 100%;
max-width: 1050px;
min-height: 69px;
gap: 16px;
display: flex;
justify-content: flex-start;
align-items: center;
background-color: #fcfcfc;
border-radius: 12px;
cursor: pointer;
input{
  border: none;
  font-size: 16px;
  color: #111111;
  &:focus{
    border-bottom: 1px solid #666;
    outline: none;
    color: #666;
  }
}
/* span {
  margin: 0;
  font-size: 16px;
  color: #111111;
  flex-grow: 1;
} */
.name{
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.phone, .email{
  color: #666;
}
.actions{
  display: flex;
  gap: 12px;
}
.extra{
  display: flex;
  flex: 1;
  gap:16px;
  align-items: center;
  justify-content: space-between;
}

@media(max-width: 768px){
  padding: 12px;
  height: auto;
  min-height: 60px;
  gap: 8px;
  flex-wrap: wrap;
  input{
    padding: 8px 0;
    width:100%;
    border-bottom: 1px solid #eee;
  }  
  .name{
    font-size: 14px;
    flex:1;
  }
  .extra{
    margin-top: 4px;
    padding-top: 12px;
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap:12px;
    border-top: 1px solid #eaeaea;
  }
  &.expanded{
    .extra{
      display: flex;
    }
  }
  .actions{
    width: 100%;
    justify-content: flex-end;
    padding-top: 8px;
  }

}
`

export const Letra = styled.h1`
margin: 20px 0;
font-size: 32px;
color: #9f89a4;
@media(max-width: 768px){
  width:auto;
  margin:10px 0;
  font-size: 20px;      

}
`
export const Avatar = styled.div`
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
  @media(max-width: 768px){
    width: 30px;
    height:36px;
    font-size: 16px;
  }
`;