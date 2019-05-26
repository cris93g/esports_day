const {
  leagueMatchHistory,
  getPlayersFromTournament,
  getTeamsFromTournament,
  getChamps
} = require("../controllers/lolctrl");

const {
  ovwerwatchMatchHistory,
  getOwTeams,
  getOwPlayersFromTournament
} = require("../controllers/owctrl");

module.exports = app => {
  app.get(`/api/matchhistory`, leagueMatchHistory);
  app.get(`/api/playersfromtournament`, getPlayersFromTournament);
  app.post(`/api/teamsfromtournament`, getTeamsFromTournament);
  app.get(`/api/lolchamps`, getChamps);
  app.get(`/api/owmatchhistory`, ovwerwatchMatchHistory);
  app.get(`/api/owTeams`, getOwTeams);
  app.get(`/api/owplayersfromtournament`, getOwPlayersFromTournament);
};
