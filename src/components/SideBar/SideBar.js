import React, { Component } from "react";
import "./SideBar.css";
import home from "../../images/svg/home.svg";
export default class SideBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="topnavcontainer">
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
				<div className="topsection">
					<div className="leftNavs">HOME </div>
					<div className="leftNavs"> TRENDING</div>
					<div className="leftNavs"> SUBSCRIPTION</div>
				</div>
			</div>
		);
	}
}
