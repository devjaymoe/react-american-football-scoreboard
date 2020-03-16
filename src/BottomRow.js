import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  // set states
  const [down, setDown] = useState(1);
  const [quarter, setQuarter] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(100);
  //functions 
  const plusDown = () => {
    if (down === 4){
      setDown(1)
    } else{
      setDown(down + 1)
    }
  };
  const plusQuarter = () => {
    if (quarter === 4){
      setQuarter(1)
    } else{
      setQuarter(quarter + 1)
    }
  };
  const tillFirstDown = () => {
    if (toGo === 1){
      setToGo(10)
    } else {
      setToGo(toGo - 1)
    }
  };
  const tillTD1 = () => {
    if (ballOn === 1){
      setBallOn(100)
    } else {
      setBallOn(ballOn - 1)
    }
  };
  const tillTD2 = () => {
    if (ballOn <= 1){
      setBallOn(100)
    } else {
      setBallOn(ballOn - 2)
    }
  };
  const tillTD5 = () => {
    if (ballOn <= 1){
      setBallOn(100)
    } else {
      setBallOn(ballOn - 5)
    }
  };
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="awayButtons__touchdown" onClick={plusDown}>Add Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <button className="awayButtons__fieldGoal" onClick={tillFirstDown}>-1</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <div>
        <button id='ballOnButton' className="awayButtons__fieldGoal" onClick={tillTD1}>-1</button>
        <button id='ballOnButton' className="awayButtons__fieldGoal" onClick={tillTD2}>-2</button>
        <button id='ballOnButton' className="awayButtons__fieldGoal" onClick={tillTD5}>-5</button>
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button className="awayButtons__fieldGoal" onClick={plusQuarter}>Add Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
