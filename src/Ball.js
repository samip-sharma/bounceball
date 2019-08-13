import React from 'react' 

export default class Ball extends React.Component{

    state={
        x:0,
        y:0
    }

    handleJump=(e)=>{
        let now=this
        debugger
        // console.log(e.target.style.bottom)
        console.log(e.target.style.right)
        // e.style.bottom = "100px";
    }
    render(){
        return(
            <React.Fragment>
        <img   onClick={this.handleJump} className="small-ball" src="https://media.istockphoto.com/photos/tennis-ball-picture-id137345149?k=6&m=137345149&s=612x612&w=0&h=3DwFtXaN83o-VBiD4fwJK_fmuilNForlOylwRCb0Low="></img>
            </React.Fragment>
        )
    }
}