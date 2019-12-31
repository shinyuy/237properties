import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./drawer.css";

export default class SideDrawer extends Component {
  scrollToElement = element => {
    this.props.onClose(false);
  };

  render() {
    return (
      <Drawer
        className="drawer"
        anchor="top"
        open={this.props.open}
        onClose={() => this.props.onClose(false)}
      >
        <div style={{ height: "280px", backgroundColor: "#101d2c" }}>
          <div className="logo">237properties</div>
          <List component="nav" className="drawer-links">
            <ListItem style={{ color: "white", paddingRight: "50px" }} button>
              <span>Get Started</span>
            </ListItem>
            <ListItem style={{ color: "white" }} button>
              <span>Rentals</span>
            </ListItem>
            <ListItem style={{ color: "white" }} button>
              <span>For Sale</span>
            </ListItem>
            <ListItem style={{ color: "white" }} button>
              <span>Real Estate Agents</span>
            </ListItem>
          </List>
          <div className="login">
            <button id="signup">
              <a href="#">Sign Up</a>
            </button>
            <button id="login">
              <a href="#">Login</a>
            </button>
          </div>
        </div>
      </Drawer>
    );
  }
}
