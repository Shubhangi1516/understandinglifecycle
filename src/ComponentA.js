import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
      constructor(){
        super();

        this.state={
            name:"ComponentA",
            data:[]
        }
        console.log("ComponentA Construtor")
      }

       static getDerivedStateFromProps(){
         console.log("ComponentA getDerivedStateByProps");
         return null;
       }

       componentDidMount(){
        console.log("ComponentA componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/user')
             .then(response => response.json())
             .then(data => this.setState({data:data}));
      
       }


      render(){
        
        return( 
        <>
        <h1>{this.state.name}</h1>
        <ul>
            {this.state.data.map((d)=>{
                return(
                    <li>{d.username}</li>
                )
            })}
        </ul>
        </>
        )
      }
}

export default ComponentA;