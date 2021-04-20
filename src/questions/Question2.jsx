import React, { useState } from 'react';

export default function Question2(props) {
  // Situation: Create a search bar that filters items in the list as the user types.
  // Feel free to refactor as you feel necessary.

  // !TODO: Im capitalizing the first character in an item but not any further words.
  // Example: I have the Peanut but not the butter capitalized.

  const [searchText, setSearchText] = useState('');

  const shoppingList = [
    'Peanut Butter',
    'Peas',
    'Butter',
    'Beans',
    'Eggs',
    'Quiche',
    'Cheese',
  ];

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col mx-auto w-50'>
          <input
            className='form-control w-auto mx-auto'
            value={searchText.charAt(0).toUpperCase() + searchText.slice(1)}
            onChange={(e) => handleSearchTextChange(e)}
          />
          {shoppingList
            .filter((shopItem) => shopItem.includes(searchText))
            .map((filteredShopItem) => (
              <div className='p-1'>{filteredShopItem}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
