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
                        this.props.values.map((items)=>
                        <li>{items.company}: {items.value}</li>
                        )
                    }
                </ul>

            </div>
        )
    }

}

export default Main;