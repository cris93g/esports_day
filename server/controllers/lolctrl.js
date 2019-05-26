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
  const { id } = req.body;
  const results = await axios.get(
    `https://api.pandascore.co//lol/series/${id}/players?token=${API}`
  );
  const players = results.data;
  if (players) {
    res.status(200).json(players);
  }
};

let getTeamsFromTournament = async (req, res) => {
  const { id } = req.body;
  const results = await axios.get(
    `https://api.pandascore.co//lol/series/${id}/teams?token=${API}`
  );
  const teams = results.data;
  if (teams) {
    res.status(200).json(teams);
  }
};

let getChamps = async (req, res) => {
  const results = await axios.get(
    `https://api.pandascore.co//lol/champions?token=${API}`
  );
  const champs = results.data;
  if (champs) {
    res.status(200).json(champs);
  }
};

module.exports = {
  leagueMatchHistory,
  getPlayersFromTournament,
  getTeamsFromTournament,
  getChamps
};
