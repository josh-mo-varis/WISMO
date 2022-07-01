import React from 'react';
import './App.css';
import './Content.css';

import Content from './Content'

//logo header
//nav-sidebar + content
//footer

function App() {
  return (
    <div class='container'>
      <div class='header'>header</div>
      <div class='nav'>nav</div>
      <Content />
      <div class='footer'>footer</div>
    </div>
  );
}

export default App;
