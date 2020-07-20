import React from "react";

import Card from "./Card";
const CardList = ({robots}) => {
  // robots = robots.robots;
  const card = robots.map((user, i) => {
    return <Card key={i} robo={user} />;
  });
  return (
    <>
      <div>{card}</div>
    </>
  );
};

export default CardList;
