import React, { Component } from "react";
import "./SideBar.css";
import home from "../../images/svg/home.svg";
import { Link } from "react-router-dom";
export default class SideBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="topnavcontainer">
				<div className="topsection">
					<div className="innerwrapper">
						<img src={home} alt="home" className="icon" />
						<div className="leftNavs">HOME </div>
					</div>
					<Link to="/tournament">
						{" "}
						<div className="leftNavs"> TRENDING</div>
					</Link>
					<div className="leftNavs"> SUBSCRIPTION</div>
				</div>
				<div className="topsection">
					<div className="leftNavs">HOME </div>
					<div className="leftNavs"> TRENDING</div>
					<div className="leftNavs"> SUBSCRIPTION</div>
				</div>
				<div className="topsection">
					<div className="leftNavs">HOME </div>
					<div className="leftNavs"> TRENDING</div>
					<div className="leftNavs"> SUBSCRIPTION</div>
				</div>
			</div>
		);
	}
}
