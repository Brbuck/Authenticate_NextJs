import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: #333;
  padding: 10px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
    margin-left: 10px;
    padding: 15px 20px;
  }

  .user {
    font-size: 20px;
    border: 1px solid #ccc;
    padding: 6px;
    cursor: pointer;
  }
  button {
    color: #fff;
  }

 
`;
