import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [money, setMoney] = useState(100)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((sushis) => {
      setSushiList(sushis)
    })
  }, [])

  function handleMoreSushi(){
    setIndex((prevIndex) => prevIndex + 4)
  }

  function handleEatSushi(sushi) {
    if(money >= sushi.price && !eatenSushi.includes(sushi.id)){
      setEatenSushi([...eatenSushi, sushi.id]);
      setMoney((prevMoney) => prevMoney - sushi.price);
    }
  };

  return (
    <div className="app">
      <SushiContainer 
        sushi={sushiList}
        onEatSushi={handleEatSushi}
        eatenSushi={eatenSushi}
        onMoreSushi={handleMoreSushi}
        index={index}
      />
      <Table plates={eatenSushi} money={money}/>
    </div>
  );
}

export default App;
