import React from 'react';
import ListGroups from '../ListGroups/ListGroups';
import ItemsContainer from '../ItemsContainer/ItemsContainer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <ListGroups />
      <ItemsContainer />
    </div>
  );
}

export default App;
