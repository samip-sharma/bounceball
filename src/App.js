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
    radius: 10,
    velocityX: 0,
    velocityY: 0,
    right: true,
    ball: {
      
    }
}

  window.addEventListener("keydown",(e)=>{this.handleSpace(e)})
}


initialDraw = () => {
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
    this.initialDraw()
   
  }



   handleSpace=(e)=>{
     if(e.key!==" ") return null;
     this.setState({
      x: this.state.x+2,
      y: this.state.y-2,
      velocityY: 10,
      velocityX: 1
    })
   
    let i=0
    setInterval(()=>{ 
      if (this.state.y>640 || this.state.y<0) return null;
      let vely=this.state.velocityY
      let velx=this.state.velocityX
      this.setState({
        x: this.state.x+velx,
        y: this.state.y-vely,
        velocityY: this.state.velocityY-1,
      })
      this.trajectoryDraw()
      
    }, 100);
    // this.trajectoryDraw()
    
  }

  trajectoryDraw=()=>{
    const ctx = this.refs.canvas.getContext("2d");
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
    console.log(this.state)
  return (
    <div>
        <canvas  ref="canvas" width={450} height={650} className="App" ></canvas>
     </div>
  ) 
}
}

export default App;


















// window.addEventListener("keydown",(e)=>{this.handleSpace()})

// 




  // handleClick=(e)=>{
  //   this.setState({
  //     x: e.clientX,
  //     y: e.clientY+10,
     
  //   })
  //   const ctx = this.refs.canvas.getContext("2d");
  //   // change this colour to change the colour of your 
  //   // "pen" in the canvas 
  //   ctx.fillStyle = "yellow";
  //   ctx.beginPath();
  //   // ctx.clearRect(0, 0, 450, 650);
  //   ctx.arc(this.state.x, this.state.y,                        
  //           this.state.radius, 0, 2 * Math.PI);
  //   ctx.fill();
  //   ctx.stroke();
  //   ctx.restore();
  // }