import React from 'react';
function ApiCallData(props){

return(
        props.stockData.map(items=>{
            return(
                <div>
                <h1>{items.city}</h1>
                <p>location: {items.location}</p>
              </div>
            )
        })
)
}

export default ApiCallData;