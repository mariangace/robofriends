import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filterdRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const getRobots = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  };

  useEffect(() => {
    getRobots();
  }, []);

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterdRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
