const {
	leagueMatchHistory,
	getPlayersFromTournament,
	getTeamsFromTournament
} = require("../controllers/apictrl");

module.exports = app => {
	app.get(`/api/matchhistory`, leagueMatchHistory);
	app.get(`/api/playersfromtournament`, getPlayersFromTournament);
	app.get(`/api/teamsfromtournament`, getTeamsFromTournament);
};
