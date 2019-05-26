import React, { Component } from "react";
import { getTournament } from "../../redux/ducks/lolReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./tournament.css";

class Tournament extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getTournament();
	}
	render() {
		const { tournament } = this.props.lolReducer;
		console.log(this.props);
		console.log(tournament);
		const tournyDisplay = tournament.map(tourny => {
			// if(tourny.serie.slug=="league-of-legends-european-masters"){
			//  display:none;
			// }
			return (
				<div className="tournamentcard">
					<Link to={`/teams/${tourny.serie_id}`}>
						<p>{tourny.serie.slug}</p>
					</Link>
					<img src={tourny.league.image_url} className="tournamentimage" />
				</div>
			);
		});
		return <div>{tournyDisplay}</div>;
	}
}
const mapStateToProps = state => state;
export default connect(
	mapStateToProps,
	{ getTournament }
)(Tournament);
