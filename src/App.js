import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import AttributeClass from './components/AttributeClass';
import CharacterClass from './components/CharacterClass';


function App() {
  const [nums, setNums] = useState({
    'Strength': 0, 
    'Dexterity': 0, 
    'Constitution': 0, 
    'Intelligence': 0, 
    'Wisdom': 0, 
    'Charisma': 0
  });

  // Map all attributes to the AttributeClass. Pass in the
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
  
  // Map the characters to CharacterClass. Pass in the name of the character
  // and the values of each attribute as props.
  const characterKeys = Object.keys(CLASS_LIST)
  const allCharacters = characterKeys.map(character => {
    return (
      <CharacterClass 
        name={character}
        nums={nums}
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
        <div className="characters-section">
          <h3> Characters </h3>
          {allCharacters}
        </div>
      </section>
    </div>
  );
}

export default App;
