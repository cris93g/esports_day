const axios = require("axios");
const { API } = process.env;

let leagueMatchHistory = async (req, res) => {
	const results = await axios.get(
		`https://api.pandascore.co//lol/matches/past?token=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

let getPlayersFromTournament = async (req, res) => {
	const results = await axios.get(
		`https://api.pandascore.co//lol/series/1784/players?token=${API}`
	);
	const players = results.data;
	if (players) {
		res.status(200).json(players);
	}
};

let getTeamsFromTournament = async (req, res) => {
	const results = await axios.get(
		`https://api.pandascore.co//lol/series/1784/teams?token=${API}`
	);
	const teams = results.data;
	if (teams) {
		res.status(200).json(teams);
	}
};

module.exports = {
	leagueMatchHistory,
	getPlayersFromTournament,
	getTeamsFromTournament
};
