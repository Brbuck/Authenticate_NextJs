import styled, { keyframes } from 'styled-components';

const load = keyframes`  
  to {
      transform: rotate(360deg);
    }
  
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading-page{
      width: 80px;
      height: 80px;
      border: 20px solid;
      border-radius: 50%;
      border-top-color: transparent;
      margin: 0 auto;
      color: #ff417b;
      animation: ${load} 0.6s linear infinite;
    }
`;