import styled from 'styled-components';

export const Container = styled.nav`
    width: 230px;
    height: auto;
    padding: 20px 8px;
    
    position: absolute;
    top: 55px;
    left: calc(100% - 250px);

    display: flex;
    flex-direction: column;
    align-items: left;

    background-color: #333;
    border-radius: 8px;
    border: 1px solid #ccc;

    span{
        margin-left: 30px;
    }

    a{ 
       display: block;
        
       &:hover{
           color: #ec60cd;
       }
    }

    button{
        cursor: pointer;
        text-align: left;
        padding: 10px 20px;
        margin-left: 10px;

        &:hover{
           color: #ec60cd;
       }
    }
  
`;
