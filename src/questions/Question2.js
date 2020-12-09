import React, { useState } from 'react';

export default function Question2 (props) {
  // Situation: Create a search bar that filters items in the list as the user types.
  // Feel free to refactor as you feel necessary.

  const [searchText, setSearchText] = useState('');

  const shoppingList = [
    'Peanut Butter',
    'Peas',
    'Butter',
    'Beans',
    'Eggs',
    'Quiche',
    'Cheese'
  ];

  const handleSearchTextChange = () => {

  }

  return (
    <div>
      <input value={searchText} onChange={handleSearchTextChange}/>
      {shoppingList.map(item => {
        return (
          <div>
            {item}
          </div>
        )
      })}
    </div>
  )
}
