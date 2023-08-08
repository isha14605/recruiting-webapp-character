import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import AttributeClass from './components/AttributeClass';


function App() {
  const [nums, setNums] = useState({
    'Strength': 0, 
    'Dexterity': 0, 
    'Constitution': 0, 
    'Intelligence': 0, 
    'Wisdom': 0, 
    'Charisma': 0
  });

  // Map all attributes to the AttributeClass and display them. Pass in the
  // name of the attribute, the values of each attribute, and the setter
  // function as props.
  const allAttributes = ATTRIBUTE_LIST.map(attribute => {
    return (
      <AttributeClass 
        name={attribute}
        nums={nums}
        handleNums={setNums}
      />
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div className="attributes-section">
          <h3> Attributes </h3>
          {allAttributes}
        </div>
      </section>
    </div>
  );
}

export default App;
