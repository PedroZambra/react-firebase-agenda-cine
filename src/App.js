import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Films from './components/Films.js';
import Series from './components/Series.js';
import Animes from './components/Animes.js';


class App extends React.Component{
  render(){
    return(
      <div>
        <header>
          <h1 className="name">Mis peliculas y series</h1>
        </header>
        <main className="tofooter">
          <Router>
            <nav>
              <Link to="/films/"><div className="boton_film"><h2>Peliculas</h2></div></Link>
              <Link to="/series/"><div className="boton_series"><h2>Series</h2></div></Link>
              <Link to="/animes/"><div className="boton_animes"><h2>Animes</h2></div></Link>
            </nav>
            <Route path="/films/" component={films} />
            <Route path="/series/" component={users} />
            <Route path="/animes/" component={animes} />
          </Router>
        </main>
        
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

function animes(){
  return <Animes />;
}

export default App;


