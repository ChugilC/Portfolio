import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import { motion } from "framer-motion";
import chugil from "../img/chugilc.pdf";

const AboutSection = () => {
  const titleAnimate = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.5 } },
  };
  const paraAnimate = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
  };
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.h2 variants={titleAnimate} initial="hidden" animate="show">
          Hello <span>There</span>
        </motion.h2>
        <div className="line"></div>
        <motion.p variants={paraAnimate} initial="hidden" animate="show">
          I am Chugil and I <span>love</span> to develop websites
        </motion.p>
        <button>
          <a target="_blank" rel="noreferrer" href={chugil}>
            Resume
          </a>
        </button>
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
    a {
      text-decoration: none;
      color: #fff;
      &::hover {
        color: #000;
      }
    }
    &:hover {
      background-color: #1abc9c;
      transition: all 0.7s ease-in;
    }
  }
`;

export default AboutSection;
