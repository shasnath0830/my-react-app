import React, { Component } from 'react'; 
import HelloWorld from './HelloWorld';
import Counter from './Counter';

class App extends Component { render() {

    return (
      
      <div className='App'>
         <HelloWorld name = {'Sadekin Hasnath'}/>
         <Counter/>
      </div>
    );
  }
}

export default App;