import React from "react";
import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";
import "./containers/App.css";
import Scorll from "./components/Scroll";
// import {robots} from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  };
  render() {
    const fltrdRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0)
      return <h2 className="tc">Loading ....</h2>;
    else
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox serchChange={this.onSearchChange} />
          <Scorll>
            <CardList robots={fltrdRobots} />
          </Scorll>
        </div>
      );
  }
}

export default App;
