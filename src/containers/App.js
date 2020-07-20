import React from "react";
import {connect} from "react-redux";
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";
import Scorll from "../components/Scroll";
import {setSearchField, requestRobots} from "../actions";
// import {robots} from "./robots";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onReqRobots: () => requestRobots(dispatch),
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onReqRobots();
  }

  render() {
    const fltrdRobots = this.props.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
    return this.props.isPending ? (
      <h2 className="tc">Loading ....</h2>
    ) : (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox serchChange={this.props.onSearchChange} />
        <Scorll>
          <ErrorBoundry>
            <CardList robots={fltrdRobots} />
          </ErrorBoundry>
        </Scorll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
