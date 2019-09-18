import React, {useEffect ,useState} from 'react';
import Header from './Header';
import axios from 'axios';
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

const Home = () => {
  return <h1>Home</h1>
}

const Genres = () => {
  return <h1>Gêneros</h1>
}


function App() {
  useEffect(() =>{
    console.log(1);
  }, []);
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos' component={Genres}/>
      </div>
    </Router>
  )
}

export default App;
