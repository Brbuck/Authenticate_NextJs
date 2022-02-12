import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: auto;
  background-color: #222;

`;

export const Illustration = styled.div`
  width: 100%;
  background: url("https://img.freepik.com/vetores-gratis/formas-geometricas-gradientes-em-fundo-escuro_23-2148424875.jpg?size=626&ext=jpg")
    no-repeat center center/cover;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: color;
  height: 500px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.9rem;
    text-transform: capitalize;
    color: #fff;
  }
`;

export const Sign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 20px;

  h2 {
    margin-bottom: 20px;
    color: #fff;
  }
`;


export const EditButton = styled(Button)`
  background-color: #ec60cd;
  color: #fff;
  margin-top: 10px;
  max-width: 200px;
  margin-top: 20px;
`;

export const EditInput = styled(Input)`
  margin: 10px 0px;
  background-color: #fff;
  border-radius: 25px;
`;

