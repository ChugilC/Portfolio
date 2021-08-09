import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <h2>
          Hello <span>There</span>
        </h2>
        <div className="line"></div>
        <p>
          I am Chugil and I <span>love</span> to develope websites
        </p>
        <button>Resume</button>
      </StyledDescription>
      <div className="image">
        <Particles
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 700,
                },
              },
            },
          }}
        />
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledDescription = styled.div`
  h2 {
    font-size: 5rem;
    padding-bottom: 20px;
  }
  p {
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .line {
    display: block;
    height: 0.2rem;
    width: 26rem;
    background: #fff;
  }
  button {
    background-color: transparent;
    border: 3px solid #1abc9c;
    color: #fff;
    width: 100px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color: #1abc9c;
      color: #000;
      transition: all 0.7s ease-in;
    }
  }
`;

export default AboutSection;
