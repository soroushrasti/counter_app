import React, { Component } from 'react';
class Counter extends Component {
    formatCount(){
        const {value: count}=this.props.counter;
        return count ===0 ? 'Zero' : count;
    }
    styles={size:10, fontWeigth: 'bold'};
    state = { 
        //value:this.props.counter.value,
        tags:['tag1','tag2','tag3']
    }
    renderTags(){
        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }

 
    render() { 
        return (  <div>
            <h4>{this.props.counter.id}</h4>
            <span style={this.style} className={this.getBadgeClasses()}>
             {this.formatCount()}
            </span>
            <button onClick={()=> this.props.onIncrement(this.props.counter) } className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={()=> this.props.onDelete(this.props.counter.id) } className='btn btn-danger btn-sm m-2'>Delete</button>
            {this.state.tags.length===0 && "Please enter a tag"}
            {this.renderTags()}
        </div>);
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter;