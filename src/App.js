import React from "react";
import ComponentA from "./ComponentA";
import TimerOne from "./Timer/TimerOne";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {


  //Timer App
   /*
    constructor(){
      super();

      this.state={
           timerOn:false
      }
    }

    handleTimerOn = ()=>{
      this.setState((prevState)=>({timerOn:!prevState.timerOn}));
    }


    render(){
      return(
        <>
        <button onClick={this.handleTimerOn}>{this.state.timerOn ? "STOP" : "START"}</button>
         <TimerOne timerOn={this.state.timerOn}/>
        </>
      );
    }*/


    //Example for Error Boundary
    constructor(){
      super();
    }

    render(){
      return(
      <>
      <ErrorBoundary>
        <ComponentA/>
      </ErrorBoundary>
        
      
      </>
      );
    }
}

export default App;
