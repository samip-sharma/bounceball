import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Ball'

class App extends React.Component{

state = {
    ball: {
        x: 200,
        y: 50,
        radius: 10
    }
}

draw = () => {
  const ctx = this.refs.canvas.getContext("2d");
  // change this colour to change the colour of your 
  // "pen" in the canvas 
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(this.state.ball.x, this.state.ball.y,                        
          this.state.ball.radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

  componentDidMount() {
    this.draw()
  }

  render(){
  return (
    <div>
        <canvas ref="canvas" width={450} height={650} className="App" ></canvas>
        </div>
  ) 
}
}

export default App;
