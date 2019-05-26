import React, { Component } from "react";
import axios from "axios";
import "./Teams.css";
import styled from "styled-components";
class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			team: []
		};
	}

	componentDidMount() {
		axios
			.post(`/api/teamsfromtournament`, {
				id: this.props.match.params.serieid
			})
			.then(response => {
				this.setState({ team: response.data });
			});
	}
	render() {
		console.log(this.props.match.params.serieid);
		console.log(this.state.team);

		let { team } = this.state;

		let displayTeams = team.map(t => {
			return (
				<div key={t.id} className="teamcard">
					<Logo>
						{" "}
						<img src={t.image_url} className="teampic" />
					</Logo>
					<CardContainer>
						{t.players.map(player => {
							return (
								<Cards>
									<div className="playersdiv">
										<img src={player.image_url} className="playerpic" />
										<h3>{`${player.first_name} ${player.last_name} `}</h3>
										<p>{player.name}</p>
										<p>{player.role}</p>
									</div>
								</Cards>
							);
						})}
					</CardContainer>
				</div>
			);
		});
		return <div>{displayTeams}</div>;
	}
}
export default Teams;
const Cards = styled.div`
	width: 250px;
	height: 300px;
	display: flex;
	transition: 0.3s;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	cursor: pointer;
	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;
const CardContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: stretch;
`;

const Logo = styled.div`
	display: flex;
	margin: auto;
	justify-content: center;
	width: 100%;
	height: 400px;
`;
