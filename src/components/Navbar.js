import React, { Component, } from 'react';
import { Menu, Image, } from "semantic-ui-react";
import { NavLink, } from "react-router-dom";
import styled from "styled-components";

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render() {
    const { activeItem } = this.state

    return(
      <StyledNavbar>
        <Menu inverted>
          <NavLink
            to="/"
            exact
          >
            <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
          </NavLink>
          <NavLink
            to="/about"
            exact
          >
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              About Me
            </Menu.Item>
          </NavLink>
          <NavLink
            to="/projects"
            exact
          >
            <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            >
              Projects
            </Menu.Item>
          </NavLink>
        </Menu>
      </StyledNavbar>
    )
  };
};

const StyledNavbar = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  width: 100vw;
  background: #1a1a1a;
`

export default Navbar