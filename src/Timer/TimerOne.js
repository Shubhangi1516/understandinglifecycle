import React from "react";


export default class Timer extends React.Component{
   
      constructor(){
        super();
        this.state={
            time : 0
        }

        this.timer=null;
        console.log("TimerOne Construtor")
      }

       static getDerivedStateFromProps(){
         console.log("TimerOne getDerivedStateByProps");
         return null;
       }

       shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.time);

        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
         //return true;
       }


       render(){
        console.log("TimerOne render")
        return(
           <>
           <h1>Time Spent: </h1>
           {new Date(this.state.time*1000).toISOString().slice(11,19)}
          </>
        )
      }

       componentDidMount(){
        console.log("TimerOne componentDidMount");
          //setInterval is asynchronous func whose output is not predictable,so its a side effect so we write it in componentDidMount

         
       }

       getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("TimeOne getSnapShotBeforeUpdate");
       }

       componentDidUpdate(prevProps,prevState,snapShot){
          console.log("TimerOne componentDidUpdate");
          console.log("______________________________");
          
          if(prevProps.timerOn !== this.props.timerOn){
             if(this.props.timerOn){
                  this.timer = setInterval(()=>{
                    this.setState((prevState)=>({time : prevState.time+1}))
                  },1000);

                }
                else{
                    clearInterval(this.timer);
                }
            }
          }
        
       

       componentWillUnmount(){
         console.log("TimerOne componentWillUnmount");
       }


    }