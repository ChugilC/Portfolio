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
  }
  ul {
    display: flex;
    list-style: none;
  }
  .logo {
    font-size: 1.6rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 8rem;
    position: relative;
    font-size: 17px;
  }
`;

export default Navbar;
