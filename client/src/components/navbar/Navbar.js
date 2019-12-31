import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./navbar.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

export default class Navbar extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 800) {
      return (
        <AppBar
          className="nav"
          position="fixed"
          style={{
            backgroundColor: "#101d2c",
            width: '100%',
            padding: '0px',
            borderBottom: "2px solid #c69963"
          }}
        >
          <Toolbar>
            <div className="toolbar">
              <div className="logo">
                237properties
              </div>
              <div className="links">
                <List component="nav" className="links">
                  <ListItem
                    className="link"
                    button
                  >
                    <span>Get Started</span>
                  </ListItem>
                  <ListItem
                    className="link"
                    button
                  >
                    <span>Rentals</span>
                  </ListItem>
                  <ListItem
                    className="link"
                    button
                  >
                    <span>For Sale</span>
                  </ListItem>
                  <ListItem
                    className="link"
                    button
                  >
                    <span>Real Estate Agents</span>
                  </ListItem>
                </List>
              </div>
              <div className="login">
                <button id="signup">
                  <a href="#">
                    Sign Up
                  </a>
                </button>
                <button id="login">
                  <a href="#">
                    Login
                  </a>
                </button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      );
    } else {
      return (
        <AppBar
          className="nav"
          position="fixed"
          style={{
            backgroundColor: "#101d2c",
            width: "100%",
            padding: '0px',
            borderBottom: "2px solid #c69963"
          }}
        >
          <Toolbar className="side-drawer">
          <div className="logo">
                237properties
              </div>
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={value => this.toggleDrawer(value)}
            >
              <MenuIcon />
            </IconButton>

            <SideDrawer
              open={this.state.drawerOpen}
              onClose={value => this.toggleDrawer(value)}
            />
          </Toolbar>
        </AppBar>
      ); 
    }
  }

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (<>{this.resize()}</>);
  }
}
