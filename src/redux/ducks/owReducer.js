import axios from "axios";

const GET_OW_TOURNAMENT = "   GET_OW_TOURNAMENT";
const GET_OW_TEAMS = "GET_OW_TEAMS";
const GET_OW_PLAYERS_IN_TOURNAMENT = "GET_OW_PLAYERS_IN_TOURNAMENT";

export function getOwTournament() {
	return {
		type: GET_OW_TOURNAMENT,
		payload: axios.get(`/api/owmatchhistory`)
	};
}

export function getOwTeams() {
	return {
		type: GET_OW_TEAMS,
		payload: axios.get(`/api/owTeams`)
	};
}

export function getOwPlayersInTournament() {
	return {
		type: GET_OW_PLAYERS_IN_TOURNAMENT,
		payload: axios.get(`/api/owplayersfromtournament`)
	};
}

const initialState = {
	tournament: [],
	players: [],
	teams: []
};

export default function lolReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_OW_TOURNAMENT_FULFILLED":
			return {
				...state,
				tournament: action.payload.data
			};
		case "GET_OW_TOURNAMENT_REJECTED":
			return {
				...state,
				error: action.payload
			};

		case "GET_OW_PLAYERS_IN_TOURNAMENT_FULFILLED":
			return {
				...state,
				players: action.payload.data
			};
		case "GET_OW_PLAYERS_IN_TOURNAMENT_REJECTED":
			return {
				...state,
				error: action.payload
			};

		case "GET_OW_TEAMS_FULFILLED":
			return {
				...state,
				teams: action.payload.data
			};
		case "GET_OW_TEAMS_REJECTED":
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
}
