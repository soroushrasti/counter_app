//import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import navBar from './components/navbar'
import React from 'react';

function App() {
  state = {counters:[
    {id:1,value:0},
    {id:2,value:0},
    {id:3,value:0},
]  }
handleDelete=(counterId)=>{
    const counters=this.state.counters.filter(
        c=>c.id !==counterId
    );
    this.setState({counters})
}
handleReset=()=>{
    const counters=this.state.counters.map(c=>{
        c.value=0; return c;
    });
    this.setState({counters});
}
handleIncrement= counter =>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
};

  return (
   <React.Fragment>
     <navBar />
     <main className='container'>
       <Counters/>
     </main>
   </React.Fragment>
  );
}

export default App;
