import React, {useState, useEffect}from 'react';
import { Route } from 'react-router-dom';

import Login from './views/Login.js'
import Main from './views/Main.js'

export default function(props){

  const [username, setUsername] = useState("LongNeckLarry");
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">

      <Route exact path="/" render={(props) => <Login {...props} login={setUsername}/>} />
      <Route 
        path="/posts"
        render={(props) => (
          <Main {...props} user={username} setPosts={setPosts} posts={posts}/>
        )} 
      />
    </div>
  )

}