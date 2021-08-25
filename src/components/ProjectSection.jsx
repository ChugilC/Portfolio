import React from "react";
import styled from "styled-components";
// Images
import food from "../img/food.jpg";
import discord from "../img/discord.jpg";

const ProjectSection = () => {
  const heading1 = "Recipe Finder";
  const desc1 =
    "Recipe finder is a web app where users can find all the recipes of the meal they love";
  const heading2 = "Vision";
  const desc2 =
    "Vision is a discord bot, It send greetings messages to our reply and it also gives weather updates";
  return (
    <>
      <Section>
        <h1>{heading1}</h1>
        <div className="line"></div>
        <Inner>
          <div className="imgP">
            <img className="image grow" src={food} alt="project" />
          </div>
          <div className="desc">
            <h1>{heading1}</h1>
            <h4>{desc1}</h4>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://mystifying-bartik-b5a2a0.netlify.app/"
            >
              Live Demo
            </a>
          </div>
        </Inner>
      </Section>
      <Section>
        <h1>{heading2}</h1>
        <div className="line"></div>
        <Inner>
          <div className="imgP">
            <img className="image grow" src={discord} alt="project d" />
          </div>
          <div className="desc">
            <h1>{heading2}</h1>
            <h4>{desc2}</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ChugilC/DiscordBot"
            >
              Github Link
            </a>
          </div>
        </Inner>
      </Section>
    </>
  );
};
const Section = styled.div`
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 28px;

  h1 {
    color: #1abc9c;
  }
  .desc h1,
  h4 {
    color: #fff;
  }

  &:hover {
    .line {
      color: #1abc9c;
    }
  }
  .line {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 0.9vh;
    width: 70%;
    background: #fff;
    display: block;
  }
  .image {
    height: 200px;
    width: 300px;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    .image {
      height: 100%;
      width: 100px;
      object-fit: cover;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  height: 30vh;
  width: 97%;
  background: transparent;
  border: 1px solid #1abc9c;
  .desc {
    margin-top: 50px;
    padding-left: 20px;
  }
  h4 {
    padding-bottom: 10px;
    padding-top: 10px;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    &:hover {
      color: #1abc9c;
    }
  }
  .grow {
    transition: all 1s ease-in-out;
  }

  .grow:hover {
    transform: scale(1.1);
    filter: gray;
    -webkit-filter: grayscale(0.5);
  }
  .imgP {
    overflow: hidden;
  }

  @media (max-width: 1300px) {
    height: 25vh;
    h4 {
      padding-top: 3px;
      padding-bottom: 3px;
    }
    .desc {
      margin-top: 10px;
    }
    a {
      margin-top: 30px;
    }
  }
`;

export default ProjectSection;
