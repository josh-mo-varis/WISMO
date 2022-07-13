import React from 'react';
import './App.css';
import './Content.css';
import { v4 as uuid } from 'uuid'

import Content from './Content'
import Header from './Header'
import Nav from './Nav'

//logo header
//nav-sidebar + content
//footer

function App() {
  return (
    <div class='container'>
      <Header />
      <Nav />
      <Content />
      <div class='footer'>footer</div>
    </div>
  );
}

export default App;
