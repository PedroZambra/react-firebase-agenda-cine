import React from 'react';
import * as firebase from 'firebase';

class Serie extends React.Component {
    constructor(props){
        super(props)
    }

    removeFilm (id) {
        let sure = window.confirm('¿Estás seguro?');
        if(sure){
            firebase.database().ref(this.props.nameFirebase).child(id).remove()
        }
      }

    render(){
        if(this.props.bd.length>0){
            return(
                <div className="container">
                    {this.props.bd.filter(serie => serie.dateViewEnd===this.props.completed).map(serie => 
                    <div key={serie.id} className="container_film">
                        <ul className="serie">
                            <li><p>Título: <span className="title">{serie.title}</span></p></li>
                            <li><p>Nº Temporadas: <span className="title">{serie.seasons}</span> </p></li>
                            <li><p>Episodios: <span className="title">{serie.totalEpisodes}</span> </p></li>
                            <li>{(serie.dateViewEnd==='yes') ? <span className="title">Terminada</span> : <p>Ver episodio: <span className="title">{serie.next}</span></p>}</li>
                            <li><button className="delete" onClick={() => this.removeFilm(serie.id)}>ELIMINAR</button></li>
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

export default Serie;