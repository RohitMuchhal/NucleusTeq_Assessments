import React from 'react';
import './styles.css'
import Counter from './components/Counter';
import LiveInput from './components/LiveInput';
import ToggleText from './components/ToggleText';

const App = () => {
  return (
    <div className='app-container'>
      <h1>Interactive Components</h1>
      <Counter />
      <LiveInput />
      <ToggleText />
    </div>
  );
};

export default App;
