import './App.css';
import React from 'react';
import ContactList from './components/ContactList';
import Header from './components/Header';
import AddContact from './components/AddContact';


function App() {
  return (
    <div>
      
      <Header/>
      <AddContact/>
      <ContactList/>

    </div>
  );
}

export default App;
