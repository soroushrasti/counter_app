import React, { Component } from 'react';
class Counter extends Component {
    formatCount(){
        const {count}=this.state;
        return count ===0 ? 'Zero' : count;
    }
    styles={size:10, fontWeigth: 'bold'};
    state = { 
        count:0,
        tags:['tag1','tag2','tag3']
    }
    renderTags(){
        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }
    handleIncrement= (product) =>{
        this.setState({
            count: this.state.count +1
        });
    };
 
    render() { 
        return (  <div>
            <span style={this.style} className={this.getBadgeClasses()}>
             {this.formatCount()}
            </span>
            <button onClick={()=> this.handleIncrement(product) } className='btn btn-secondary btn-sm'>Increment</button>
            {this.state.tags.length===0 && "Please enter a tag"}
            {this.renderTags()}
        </div>);
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter;