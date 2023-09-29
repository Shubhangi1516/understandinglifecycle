import {Component} from "react";

export default class ErrorBoundary extends Component{
     constructor(){
        super();

        this.state={
            hasError: false
        }
     }
     
     static getDerivedStateFromError(error){
        return {
            hasError:true
        };
     }

     componentDidCatch(error,info){
        console.log("Error:",error);
        console.log("Error Info:",info);
     }

     render(){
        if(this.state.hasError){
            return(<h1>Something Went Wrong,contact Admin</h1>)
        }

        //ErrorBoundary's chldren is ComponentA, cuz it is enclosed bewteen it, in App.js,so if no error then props.children i.e. normal UI ComponentA will render
        return this.props.children
     }

}