import styled from "styled-components";

export const Loader = styled.svg`
  animation: rotate 2s linear infinite; 
  width: 70px;
  height: 70px;
  position: relative;
  top: 50vh; 
  left: 50%;
  
  & .path {
    stroke: #fd4949;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;