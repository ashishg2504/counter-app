import react,{ Component } from 'react'
import './counter.css';
import refresh from './reload.png'

class App extends Component{
  state ={
     counterNumber: 0,
     defaultColor: "white",
     colorList: ['red','blue','beige','lightsalmon','green','lightblue','gray']
    }
  colorChange = () => {
    let random = Math.floor(Math.random(0)*this.state.colorList.length)
  return(
    random
  )
  }
  increaseNumber = () => {
    this.setState({
      counterNumber: this.state.counterNumber + 1
    })
  }
  restartNumber = () => {
    this.setState({
      counterNumber: 0
    }
  )
  }
  decreaseNumber = () => {
    this.setState({
      counterNumber: this.state.counterNumber - 1
    })
  }
  render(){
    console.log(this.colorChange())
    return(
      <div className="Counter" style={{backgroundColor: this.state.counterNumber===0 ? this.state.defaultColor :this.state.colorList[this.colorChange()]}}> 
  <h1 id="number">{this.state.counterNumber}</h1>
    <button id="increment" onClick={()=> {this.increaseNumber()}}><h2 align="center">+</h2></button>  
    <button id="refresh"  onClick={()=> {this.restartNumber()}}><img src={refresh} width="19px" height="19px" alt="refresh" /></button>  
    <button id="decrement"  onClick={()=>{this.decreaseNumber()}}><h2 align="center">-</h2></button>
  </div>
    )   
  }
}

export default App;
