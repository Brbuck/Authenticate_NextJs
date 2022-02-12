import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";

export const Container = styled.div`
  width: 100vw;
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
  border: 1px solid #333;
`;

export const EditButton = styled(Button)`
 background-color: green;
  color: #FFF;
  margin-top: 10px;
`;

export const EditInput = styled(Input)`
  border-bottom: 1px solid #ccc;
  
`;
