import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Main from './Main';
import Greetings from './Greetings';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Fred",
      microsoftValue: 100,
      tweeterValue: 200,
      amazoneValue: 300,
      values:[
        {"company":"Microsoft", "value":100},
        {"company":"Tweeter", "value":200},
        {"company":"Amazon", "value":300},
        {"company":"Tyler", "value":400},
      ]
    }
  }

    increaseValues(){
      this.setState((prevState)=>({
        microsoftValue: prevState.microsoftValue+115,
        tweeterValue: prevState.tweeterValue+7,
        amazoneValue: prevState.amazoneValue+1
      }))
    }

    decreaseValues(){
      this.setState((prevState)=>({
        microsoftValue: prevState.microsoftValue-115,
        tweeterValue: prevState.tweeterValue-7,
        amazoneValue: prevState.amazoneValue-1
      }))
    }

    jumbleValues(){
      this.setState((prevState)=>({
        microsoftValue: prevState.amazoneValue,
        tweeterValue: prevState.microsoftValue,
        amazoneValue: prevState.tweeterValue
      }))
    }
    increaseValues2(){
      this.setState((prevState)=>({
        values:[
          {"company":"Microsoft", "value":prevState.values[0].value+1},
          {"company":"Tweeter", "value":prevState.values[1].value+1},
          {"company":"Amazon", "value":prevState.values[2].value+1},
          {"company":"Tyler", "value":prevState.values[3].value+1}    
        ]
      }))
    }

    decreaseValues2(){
      this.setState((prevState)=>({
        values:[
          {"company":"Microsoft", "value":prevState.values[0].value-1},
          {"company":"Tweeter", "value":prevState.values[1].value-1},
          {"company":"Amazon", "value":prevState.values[2].value-1},
          {"company":"Tyler", "value":prevState.values[3].value-1}    
        ]
      }))
    }

    jumbleValues2(){
      this.setState((prevState)=>({
        values:[
          {"company":"Microsoft", "value":prevState.values[3].value},
          {"company":"Tweeter", "value":prevState.values[0].value},
          {"company":"Amazon", "value":prevState.values[1].value},
          {"company":"Tyler", "value":prevState.values[2].value}    
        ]
      }))
    }




  render() {
    return (
      <div>Stock-App
        <Welcome name={this.state.name} />

        <Main
          values={this.state.values}
          microsoftValue={this.state.microsoftValue}
          tweeterValue={this.state.tweeterValue}
          amazoneValue={this.state.amazoneValue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
          jumble={this.jumbleValues.bind(this)}
          increase2={this.increaseValues2.bind(this)}
          decrease2={this.decreaseValues2.bind(this)}
          jumble2={this.jumbleValues2.bind(this)}
        />
      </div>
    )
  }
}

export default App;
