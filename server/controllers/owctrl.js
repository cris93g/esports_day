const axios = require("axios");
const { API } = process.env;

let ovwerwatchMatchHistory = async (req, res) => {
	const results = await axios.get(
		`https://api.pandascore.co//ow/matches?token=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};
let getOwPlayersFromTournament = async (req, res) => {
	const results = await axios.get(
		`https://api.pandascore.co//ow/series/1670/players?token=${API}`
	);
	const players = results.data;
	if (players) {
		res.status(200).json(players);
	}
};
let getOwTeams = async (req, res) => {
	const results = await axios.get(
		`https://api.pandascore.co//ow/teams?token=${API}`
	);
	const teams = results.data;
	if (teams) {
		res.status(200).json(teams);
	}
};
module.exports = {
	ovwerwatchMatchHistory,
	getOwTeams,
	getOwPlayersFromTournament
};
