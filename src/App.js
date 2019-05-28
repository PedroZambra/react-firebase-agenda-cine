import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Films from './components/Films.js';
import Series from './components/Series.js';


class App extends React.Component{
  render(){
    return(
      <div>
        <header>
          <h1 className="name">Mis peliculas y series</h1>
        </header>
        <Router>
            <nav>
              <Link to="/films/"><div className="boton_film"><h2>Peliculas</h2></div></Link>
              <Link to="/series/"><div className="boton_series"><h2>Series</h2></div></Link>
            </nav>
            <Route path="/films/" component={films} />
            <Route path="/series/" component={users} />
        </Router>
        <footer>
        <h2 className="name">Pedro Zambrano Marin</h2>
        </footer>
      </div>
    )
  }
}

function films() {
  return <Films/>;
}

function users() {
  return <Series/>;
}

export default App;


