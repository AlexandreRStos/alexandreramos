import styled, { keyframes } from 'styled-components';

export const scroll = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-210px * 4))}
`;
export const Slider = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  ::after {
    content: '';
    width: 35%;
    height: 100%;
    position: absolute;
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    top: 0;
    left: 0;
    z-index: 1000;
  }
  ::before {
    content: '';
    width: 35%;
    height: 100%;
    position: absolute;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    top: 0;
    right: 0;
    z-index: 1000;
  }
`;

export const Grid = styled.div`
  display: flex;
  animation: ${scroll} 40s linear infinite;
  width: calc(210px * 8);
  margin: 0 auto;
`;

export const Slide = styled.div`
  width: 210px;
  text-align: center;
  opacity: 0.9;
`;
