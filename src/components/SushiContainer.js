import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, onMoreSushi, onEatSushi, eatenSushi, index}) {
  const sushiToDisplay = sushi.slice(index, index + 4);
  return (
    <div className="belt">
      {sushiToDisplay.map((sushi) => (
        <Sushi 
          key={sushi.id} 
          sushi={sushi}
          onEatSushi={onEatSushi}
          eaten={eatenSushi.includes(sushi.id)}
        />
      ))}
      <MoreButton onMoreSushi={onMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
