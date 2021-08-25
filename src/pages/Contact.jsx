import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <>
      <div>
        <Title>
          How to <span>Contact</span>
        </Title>
      </div>
      <Container>
        <Card>
          <ElementContainer>
            <Elements>
              <span className="name">Email </span>: chugilrc13@gmail.com
            </Elements>
            <Elements>
              <span className="name">Phone </span>: +91 9498331043
            </Elements>
          </ElementContainer>
          <div className="line">
            <h2>
              More <span>Links</span>
            </h2>
          </div>
          <div className="more">
            <Links>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/chugilc/"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    Linked IN
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/ChugilC"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    Github
                  </a>
                </li>
              </ul>
            </Links>
          </div>
        </Card>
      </Container>
    </>
  );
};
const Title = styled.div`
  text-align: center;
  padding: 1rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 1300px) {
    font-size: 2rem;
    margin-top: 10px;
    position: relative;
    text-align: center;
    padding: 20px;
  }
`;

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    min-height: 40vh;
  }
`;

const Card = styled.div`
  background: sandybrown;
  height: 70vh;
  width: 80%;
  .more {
    margin-top: 30px;
    h2 {
      text-align: center;
      color: #141414;
    }
  }
  .line {
    height: 5vh;
    width: 100%;
    background: #282828;
    text-align: center;
    padding: 5px;
  }
  @media (max-width: 1300px) {
    margin-top: 0;
    height: 50vh;
    .more {
      margin-top: 10px;
    }
  }
`;

const ElementContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Elements = styled.div`
  color: #000;
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 10px;
  .name {
    color: #000;
    font-weight: 400;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-top: 20px;
    padding: 1rem;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    &:hover {
      color: blue;
    }
  }
`;

export default Contact;
