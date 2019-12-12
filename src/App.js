import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Main from './Main';
import Greetings from './Greetings';
import LoginForm from './LoginForm';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "First",
      last:"Last",
      name: "Fred",
      microsoftValue: 100,
      tweeterValue: 200,
      amazoneValue: 300,
      values:[
        {"company":"Microsoft", "value":100},
        {"company":"Tweeter", "value":200},
        {"company":"Amazon", "value":300},
        {"company":"Tyler", "value":400},
      ],
      email:'',
      password: '',
      stockData:[],
      isLoggedIn:false
    }
  }

    componentDidMount(){
      fetch("https://api.openaq.org/v1/latest?country=FR&parameter=pm25&limit=10")
      .then(response=>response.json())
      .then(response=>this.setState({
        stockData:response.results
      }))
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

handleChange(event){
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]:value
  })
}

handleSubmit(event){
  event.preventDefault();
}

handleFormUpdate(values){
  this.setState({
    email:values.email,
    password: values.password,
    isLoggedIn:true
  })
}

  render() {
    return (
      <div>Stock-App
        <Welcome first={this.state.first} last={this.state.last}/>
        <form onSubmit={this.handleSubmit.bind(this)}> 
          <label>First Name:
            <input type="text" name="first" value={this.state.first} onChange={this.handleChange.bind(this)}/>
          </label>
          <label>Last Name:
            <input type="text" name="last" value={this.state.last} onChange={this.handleChange.bind(this)}/>
          </label>
        <button type="submit">Submit</button>
        </form>
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
        <LoginForm handleFormUpdate={this.handleFormUpdate.bind(this)}/>
        {
          this.state.isLoggedIn?
            <p>Thanks for logging in!</p> :
            <p>please login above.</p>
        }

        {
         this.state.stockData.map((items,index)=>{
            
          return(
            <div>
            <h1>{items.city}</h1>
            <p>location: {items.location}</p>
          </div>
          )
          })
        }
        
      </div>
    )
  }
}

export default App;
