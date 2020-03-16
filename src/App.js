//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // state changers
  const [homeScore, setScoreHome] = useState(0);
  const [awayScore, setScoreAway] = useState(0);
  // scoring functions
  const homeTD = () => {setScoreHome(homeScore + 7)};
  const homeFG = () => {setScoreHome(homeScore + 3)};
  const homeReset = () => {setScoreHome(0)};
  const awayTD = () => {setScoreAway(awayScore + 7)};
  const awayFG = () => {setScoreAway(awayScore + 3)};
  const awayReset = () => {setScoreAway(0)};

  // get time refernce; this one is 15 min from now
  var countDownTime = new Date().getTime() + 15 * 60 * 1000;
  // timer function
  var x = setInterval(function(){
    // todays time
    var now = new Date().getTime();
    // get the distance between the two times
    var distance = countDownTime - now;
    //time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // put the variables on the dom
    document.querySelector(".timer").textContent =  `${minutes}: ${seconds}`;
    // once it hits zero timer stops
    if(distance < 0){
      clearInterval(x);
      alert('Time Up!')
    }
  }, 1000)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">15:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTD}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFG}>Home Field Goal</button>
          <button className="homeButtons__fieldGoal" onClick={homeReset}>Reset Home Score</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFG}>Away Field Goal</button>
          <button className="awayButtons__fieldGoal" onClick={awayReset}>Reset Away Score</button>
        </div>
      </section>
    </div>
  );
}

export default App;
