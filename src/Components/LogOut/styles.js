import styled from 'styled-components';
import Button from '../Button'
import Input from '../Input'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);

    display: flex;
    justify-content: center;
    align-items: center;
    
  
`;
export const Form = styled.form`
    width: 100%;
    max-width: 600px;
    height: auto;
    padding: 20px;
    
    h1{
        text-align: center;
        margin-bottom: 20px;
        color: #f99b38;
    }
    
`

export const EditButton = styled(Button)`
    background-color: #f99b38;
    color: #111;
    margin-top: 20px;
`

export const EditInput = styled(Input)`
    border: 1px solid #111;
    border-radius: 25px;
    margin: 10px 0px;
    
`