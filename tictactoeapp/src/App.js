import React from "react";
import "./App.css";
import Grid from "./Grid";
class App extends React.Component{
    render(){
        return(
<div className="container">
<div className="header">Tic Tac Toe</div>
<div id="board">
  <Grid/>
    </div>
    <div className="turn"></div>
    </div>
);
    }
}
export default App;