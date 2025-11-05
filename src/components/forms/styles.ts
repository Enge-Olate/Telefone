import styled from 'styled-components';



const Form = styled.form`
    padding: 8px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border: 1px solid #2F5883;
    border-radius: 8px;

    input{
        width: 250px;
        padding: 4px;
        margin-bottom: 10px;
        outline: none;
        color: #666;
        font-weight: 500;
        font-size: 15px;
    }


`;
export const ButtonGroup = styled.div`
display: flex;
justify-content: space-around;


`
export const StyledButton = styled.button`
  width: 90px;
  padding: 4px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 100;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const ButtonSubmit = styled(StyledButton)`
background-color: #2f5883;
color: #fcfcfc;
&:hover{
  position: relative;
  left: 2.5px;
  opacity: .5;
}
`
export const ButtonCancel = styled(StyledButton)`
background-color: #992b2b98;
color: #fcfcfc;
&:hover{
  position: relative;
  right: 2.5px;
}
`
export default Form;