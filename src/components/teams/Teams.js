import React, { Component } from "react";
import axios from "axios";
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
      return <div>{t.name}</div>;
    });
    return <div>{displayTeams}</div>;
  }
}
export default Teams;
