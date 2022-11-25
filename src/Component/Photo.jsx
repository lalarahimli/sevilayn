import { Component } from "react";
import './Photo.css'
 class Photo extends Component {
    state={
        Asa:"",
        Adress:"",
        Phone:"",
      
    }
    handleAsa=(e)=>{
        this.setState({Asa:e.target.value})
    }
    handleAdress=(e)=>{
        this.setState({Adress:e.target.value})
    }
    handlePhone=(e)=>{
        this.setState({Phone:e.target.value})
    }
    handleClick1=(e)=>{
        this.setState({Asa:''})
    }
    handleClick2=(e)=>{
        this.setState({Adress:' '})
    }
    handleClick3=(e)=>{
        this.setState({Phone:' '})
    }
    handleClick4 =(e)=>{
        this.setState(this.state.Asa==='' || this.state.Adress==='' || this.state.Phone===''? alert('fill inputs'): alert('is bitdi'))
    }
    render(){
        console.log(this.state)
        return(
            
        
     
            <div className="Photo">
          
                <label htmlFor=".">Asa:
                <input type="text" id="Asa"name="Asa"onChange={this.handleAsa}/><button type="button" className="btn" onClick={this.handleClick1}>x</button></label>
                <label htmlFor=".">Adress:
                <input type="text" id="Adress"name="Adress"onChange={this.handleAdress}/><button type="button" className="btn" onClick={this.handleClick2}>x</button></label>
                <label htmlFor=".">Phone:
                <input type="number" id="Phone"name="Phone"onChange={this.handlePhone}/><button type="button" className="btn" onClick={this.handleClick3}>x</button></label>
                <form className="hi" 
            >
           
            <button type="submit" className="text" onClick={this.handleClick4}>Submit</button>
          </form>
            </div>
        )
    }
 }
 
 
    
   export default Photo
   