import React from 'react';
import { Route } from 'react-router-dom';

import Login from './views/Login.js'
import Main from './views/Main.js'

export default function(props){

  // const [username, setUsername] = useState('');

  return (
    <div className="App">

      <Route exact path="/" render={() => <Login />} />
      <Route path="/posts" render={() => <Main />} />
    </div>
  )

}