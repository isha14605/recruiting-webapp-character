import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import AttributeClass from './components/AttributeClass';
import CharacterClass from './components/CharacterClass';
import SkillsClass from './components/SkillsClass';

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

  function getModifier(attribute) {
    return Math.floor((attribute - 10)/2)
  }

  function totalPoints(attribute) {
    return 10 + (4 * attribute)
  }

  // Map all the skills to SkillsClass. Pass in the name of the skill, its attribute modifier,
  // the value of the modifier based on nums, and the total points available.
  const allSkills = SKILL_LIST.map(anObject => {
    return (
      <SkillsClass 
        name={anObject.name}
        attributeModifier={anObject.attributeModifier}
        modifierValue={getModifier(nums[anObject.attributeModifier])}
        totalPointsAvailable={totalPoints(nums.Intelligence)}
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
        <div className="skills-section">
          <h3> Skills </h3>
          <h5> Total Skills Points Available: {totalPoints(nums.Intelligence)}</h5>
          {allSkills}
        </div>
      </section>
    </div>
  );
}

export default App;
