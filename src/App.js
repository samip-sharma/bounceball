import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Ball'

var PATHCHANGINGSTATE
class App extends React.Component{
constructor(props){
  super(props)
  this.state={   
    x: 10,
    y: 640,
    radius: 10,
    velocityX: -7,
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
    // const velocity
    // if (this.state.velocityX===0){velocity=10}else{velocity=!this.state.velocityX}
   
    console.log(PATHCHANGINGSTATE)
    if (!!PATHCHANGINGSTATE){clearInterval(PATHCHANGINGSTATE)}

     if(e.key!==" ") return null;
     this.setState({
      x: this.state.x+2,
      y: this.state.y-3 ,
      velocityY: 15,
      velocityX: -(this.state.velocityX)
    })
   
     PATHCHANGINGSTATE=setInterval(()=>{ 
      if (this.state.x<10 ||this.state.y>=639 || this.state.y<=0 || this.state.x===440)  {
        this.gameOver()
      }else{
        this.setState({
          x: Math.min(this.state.x+this.state.velocityX,440),
          y: Math.min(this.state.y-this.state.velocityY, 640),
          velocityY: Math.max(this.state.velocityY-1,-15)
        })
        this.trajectoryDraw()
        
     }
    }, 50);    
  }


  gameOver=()=>{
    return null
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