import React from "react";

const FruitsList = () => {
  const fruits = ["Apples", "Oranges", "Bananas"];

  return (
    <ul>
      {
        fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))

        /* {[
        <li key="Apples">Apples</li>,
        <li key="Oranges">Oranges</li>,
        <li key="Bananas">Bananas</li>,
      ]} */
      }
    </ul>
  );
};

export default FruitsList;
