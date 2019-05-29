import React from 'react';
import * as firebase from 'firebase';

import FormAddSeries from './FormAddSeries';
import Serie from './OneSerie.js';

class Animes extends React.Component{
    constructor(){
        super()
        this.state = {
            series: []
        }
    }

    componentDidMount(){
        //ADD
        firebase.database().ref('animes').on('child_added', snapshot => {
            let serie = {
              id: snapshot.key,
              title: snapshot.val().title,
              seasons: snapshot.val().seasons,
              totalEpisodes: snapshot.val().totalEpisodes,
              dateViewEnd: snapshot.val().dateViewEnd,
              next: snapshot.val().next
            }
      
            this.state.series.push(serie);
      
            this.setState({
                series : this.state.series
            });
          });
          
        //REMOVED
        firebase.database().ref('animes').on('child_removed', snapshot => {
            this.state.series = this.state.series.filter(serie => serie.id !== snapshot.key);

            this.setState({
                series: this.state.series
            });
        });
    }

    render(){
        return(
            <div>
                <FormAddSeries nameFirebase={'animes'} />
                <hr/>
                <h2 className="topTitle">Terminadas</h2>
                <Serie bd={this.state.series} nameFirebase={'animes'} completed={'yes'}/>
                <hr/>
                <h2 className="topTitle">Viendo</h2>
                <Serie bd={this.state.series} nameFirebase={'animes'} completed={'no'}/>
            </div>
        )
    }
}

export default Animes;