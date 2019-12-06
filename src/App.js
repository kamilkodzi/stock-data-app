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
        />
      </div>
    )
  }
}

export default App;
