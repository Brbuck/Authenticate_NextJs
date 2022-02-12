import styled from 'styled-components';
import Button from '../Button'
import Input from '../Input'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    
  
`;
export const Form = styled.form`
    width: 100%;
    max-width: 600px;
    height: auto;
    padding: 20px;
    border: 1px solid #333;

    div{
        margin: 10px 0px;
    }
    
`

export const EditButton = styled(Button)`
    background-color: orange;
    color: #111;
    margin-top: 10px;
`

export const EditInput = styled(Input)`
    border-bottom: 1px solid #CCC;
    
`