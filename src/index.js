import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import { robots } from './robots.js';
import Card from './components/Card.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='' >
      <h1 className='f1'>Hello There!</h1>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card  id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card  id={robots[2].id} name={robots[2].name} email={robots[2].email} />
      <Card  id={robots[3].id} name={robots[3].name} email={robots[3].email} />
    </div>

  </React.StrictMode>
);