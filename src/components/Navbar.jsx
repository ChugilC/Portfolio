import React from "react";
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <h1>
        <Link className="logo" to="/">
          Chugil <span>C</span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #1abc9c;
    }
  }
  .logo {
    font-size: 1.6rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 8rem;
    position: relative;
    font-size: 17px;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0rem;
    .logo {
      font-size: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-between;
      width: 100%;
      li {
        padding: 0;
        font-size: 19px;
      }
    }
  }
`;

export default Navbar;
