import axios from "axios";

const GET_TOURNAMENT = "GET_TOURNAMENT";
const GET_TEAMS_IN_TOURNAMEMT = "GET_TEAMS_IN_TOURNAMENT";
const GET_PLAYERS_IN_TOURNAMENT = "GET_PLAYERS_IN_TOURNAMENT";
const GET_LOL_CHAMPS = "GET_LOL_CHAMPS";

export function getChamps() {
  return {
    type: GET_LOL_CHAMPS,
    payload: axios.get(`/api/lolchamps`)
  };
}
export function getTournament() {
  return {
    type: GET_TOURNAMENT,
    payload: axios.get(`/api/matchhistory`)
  };
}

export function getTeamsInTournament() {
  return {
    type: GET_TEAMS_IN_TOURNAMEMT,
    payload: axios.get(`/api/teamsfromtournament`)
  };
}

export function getPlayersInTournament() {
  return {
    type: GET_PLAYERS_IN_TOURNAMENT,
    payload: axios.get(`/api/playersfromtournament`)
  };
}

const initialState = {
  tournament: [],
  players: [],
  teams: [],
  champs: []
};

export default function lolReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TOURNAMENT_FULFILLED":
      return {
        ...state,
        tournament: action.payload.data
      };
    case "GET_TOURNAMENT_REJECTED":
      return {
        ...state,
        error: action.payload
      };

    case "GET_PLAYERS_IN_TOURNAMENT_FULFILLED":
      return {
        ...state,
        players: action.payload.data
      };
    case "GET_PLAYERS_IN_TOURNAMENT_REJECTED":
      return {
        ...state,
        error: action.payload
      };

    case "GET_TEAMS_IN_TOURNAMEM_FULFILLED":
      return {
        ...state,
        teams: action.payload.data
      };
    case "GET_TEAMS_IN_TOURNAMEM_REJECTED":
      return {
        ...state,
        error: action.payload
      };

    case "GET_LOL_CHAMPS_FULFILLED":
      return {
        ...state,
        champs: action.payload.data
      };
    case "GET_LOL_CHAMPS_REJECTED":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
