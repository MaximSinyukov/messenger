import React from 'react';
import ListGroups from '../ListGroups/ListGroups';
import ListChats from '../ListChats/ListChats';
import './App.scss';

function App() {
  return (
    <div className="app">
      <ListGroups />
      <ListChats />
    </div>
  );
}

export default App;
