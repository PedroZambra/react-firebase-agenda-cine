import React from 'react';
import * as firebase from 'firebase';

class Film extends React.Component {
    constructor(props){
        super(props)
        // this.removeFilm = this.removeFilm.bind(this);
    }

    removeFilm (id) {
        let sure = window.confirm('¿Estás seguro?');
        if(sure){
            firebase.database().ref('data').child(id).remove()
        }
      }

    render(){
        if(this.props.data.length>0){
            return(
                <div className="container">
                    {this.props.data.map(film => 
                    <div key={film.id} className="container_film">
                        <ul className="film">
                            <li><p>Título: <span className="title">{film.title}</span></p></li>
                            <li><p>Cine: <span className="title">{film.place}</span> </p></li>
                            <li><p>Vista: <span className="title">{film.dateView}</span> </p></li>
                            <li><button className="delete" onClick={() => this.removeFilm(film.id)}>ELIMINAR</button></li>
                        </ul>
                    </div>
                    )}
                </div>
            )
        } else {
            return(<h3 className="load">Cargando...</h3>)
        }
    }
}

export default Film;