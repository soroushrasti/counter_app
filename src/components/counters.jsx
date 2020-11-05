
import React, { Component } from 'react';
import Counter from './counter'


class Counters extends Component {
   
    render() { 
        return ( 
            <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>
                {this.state.counters.map(counter=>
                    <Counter counter={counter}
                    onDelete={this.handleDelete} 
                    key={counter.id}
                    onIncrement={this.handleIncrement} />
                    )}
            </div>
         );
    }
}
 
export default Counters;
