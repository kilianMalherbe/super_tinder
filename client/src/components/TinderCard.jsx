import TinderCards from "react-tinder-card";
import "../style/TinderCard.css";
import { useEffect, useState } from "react";
import axios from "../axios";

export default function TinderCard() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards_cardContainer">
      {people.map((person) => (
        <TinderCards
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3 className="pointer-events-none">{person.name}</h3>
          </div>
        </TinderCards>
      ))}
    </div>
  );
}
