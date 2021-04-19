import React, { useState } from 'react';
import { useEffect } from 'react';

/* Resources */
/*
  https://levelup.gitconnected.com/building-a-simple-dynamic-search-bar-in-react-js-f1659d64dfae
*/
export default function Question2 (props) {
  // Situation: Create a search bar that filters items in the list as the user types.
  // Feel free to refactor as you feel necessary.

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const shoppingList = [
    'Peanut Butter',
    'Peas',
    'Butter',
    'Beans',
    'Eggs',
    'Quiche',
    'Cheese'
  ];

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const res = shoppingList.filter(item => 
      item.toLowerCase().includes(searchText)
    );
      setSearchResults(res);
  }, [searchText])

  return (
    <div className="App">
      <input
      type="text"
      value={searchText} 
      onChange={handleSearchTextChange}
      />
      {searchResults.map(item => (
          <div>
            {item}
          </div>
      ))}
    </div>
  )
}
