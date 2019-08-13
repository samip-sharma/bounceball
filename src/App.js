import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Ball'


class App extends React.Component{
constructor(props){
  super(props)
  this.state={   
    x: 10,
    y: 640,
    radius: 10
}

  window.addEventListener("keydown",(e)=>{this.handleSpace()})
}


draw = () => {
  const ctx = this.refs.canvas.getContext("2d");
  // change this colour to change the colour of your 
  // "pen" in the canvas 
  ctx.fillStyle = "yellow";
  ctx.beginPath();

  ctx.arc(this.state.x, this.state.y,                        
          this.state.radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

  componentDidMount() {
    this.draw()
   
  }

  handleClick=(e)=>{
    e.persist()
    this.setState({
      x: e.clientX,
      y: e.clientY+10,
      radius:this.state.radius+2
    })
    const ctx = this.refs.canvas.getContext("2d");
    // change this colour to change the colour of your 
    // "pen" in the canvas 
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.clearRect(0, 0, 450, 650);
    ctx.arc(this.state.x, this.state.y,                        
            this.state.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

   handleSpace=()=>{
    console.log("Alex")
    // debugger
  
    this.setState({
      x: this.state.x+30,
      y: this.state.x+30,
    })
    const ctx = this.refs.canvas.getContext("2d");
    // change this colour to change the colour of your 
    // "pen" in the canvas 
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.clearRect(0, 0, 450, 650);
    ctx.arc(this.state.x, this.state.y,                        
            this.state.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }


  render(){
    
  return (
    <div>
        <canvas onKeyDown={()=>{ }}  ref="canvas" width={450} height={650} className="App" ></canvas>
     </div>
  ) 
}
}

export default App;

// window.addEventListener("keydown",(e)=>{this.handleSpace()})

// onMouseMove={this.handleClick}