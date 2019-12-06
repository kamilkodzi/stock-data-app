import React from 'react';

class Main extends React.Component {

    render(){
        return(
            <div>
                <h1>Stock Data for Today</h1>
                <ul>
                    <li>Microsoft: {this.props.microsoftValue}</li>
                    <li>Tweeter: {this.props.tweeterValue}</li>
                    <li>Amazone: {this.props.amazoneValue}</li>
                    <button onClick={this.props.increase}>Increase Stock Values</button>
                    <button onClick={this.props.decrease}>Decrease Stock Values</button>
                    <button onClick={this.props.jumble}>Jumble Data</button>
                </ul>

                <ul>
                    {
                        this.props.values.map((items)=>{
                           if (items.value<=100){
                               return <li className="Morning">{items.company}: {items.value}</li>
                           } else if(items.value>100 && items.value<=200){
                            return <li className="Afternoon">{items.company}: {items.value}</li>
                           }else {
                            return <li className="Night">{items.company}: {items.value}</li> 
                           }
                        }
                        )
                    }
                </ul>

                <button onClick={this.props.increase2}>Increase Stock Values</button>
                <button onClick={this.props.decrease2}>Decrease Stock Values</button>
                <button onClick={this.props.jumble2}>Jumble Data</button>

            </div>
        )
    }

}

export default Main;