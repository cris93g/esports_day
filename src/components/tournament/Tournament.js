import React, { Component } from "react";
import { getTournament } from "../../redux/ducks/lolReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      return (
        <div>
          <Link to={`/teams/${tourny.serie_id}`}>{tourny.serie.slug}</Link>
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
