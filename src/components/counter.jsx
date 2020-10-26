import React, { Component } from 'react';
class counter extends Component {
    formatCount(){
        const {count}=this.state;
        return count ===0 ? 'Zero' : count;
    }
    styles={size:10, fontWeigth: 'bold'};

    state = { count:0}
    render() { 
        let classes = this.getBadgeClasses();
        return (  <div>
            <span style={this.style} className={classes}>
             {this.formatCount()}
            </span>
            <button className='btn'>Increment</button>
        </div>);
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }
}
 
export default counter;