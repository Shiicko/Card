import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
  ${(props) =>
    props.isHover &&
    `
    opacity: 0;
  `}
`;

export const Button = styled.button`
  position: relative;
  padding: 15px 30px;
  margin: 5px;
  border-radius: 6px;
  border: none;
  color: floralwhite;
  font-family: cursive;
  font-size: 16px;
  cursor: pointer;
  background-color: #cfb53b;
  transition: all 0.5s ease;

  &:active {
    transform: scale(0.96);
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    width: 150%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
  }

  &:hover:before {
    top: -70%;
    background-image: radial-gradient(
        circle,
        rgba(255, 215, 0, 0.8) 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        rgba(255, 215, 0, 0.8) 20%,
        transparent 30%
      ),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        rgba(255, 215, 0, 0.8) 15%,
        transparent 20%
      ),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;
    background-position: 50% 120%;
    animation: goldenTopBubbles 1.5s ease;
  }

  @keyframes goldenTopBubbles {
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }
    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }
    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  &:hover::after {
    bottom: -70%;
    background-image: radial-gradient(
        circle,
        rgba(255, 215, 0, 0.8) 20%,
        transparent 20%
      ),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        rgba(255, 215, 0, 0.8) 15%,
        transparent 20%
      ),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%),
      radial-gradient(circle, rgba(255, 215, 0, 0.8) 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%,
      18% 18%;
    background-position: 50% 0%;
    animation: goldenBottomBubbles 1.5s ease;
  }

  @keyframes goldenBottomBubbles {
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }
    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }
    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }
`;
