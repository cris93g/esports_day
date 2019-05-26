import React, { Component } from "react";
import "./Home.css";
import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideBar/SideBar";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <TopNav />
        <SideNav />
      </div>
    );
  }
}

export default Home;
