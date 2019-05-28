import React from 'react';
import * as firebase from 'firebase';

import FormAddFilm from './FormAdd.js';
import Film from './OneFilm.js';

class Films extends React.Component{
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    
    componentDidMount(){
        //ADD
        firebase.database().ref('data').on('child_added', snapshot => {
            let film = {
              id: snapshot.key,
              title: snapshot.val().title,
              dateView: snapshot.val().dateView,
              place: snapshot.val().place
            }
      
            this.state.data.push(film);
      
            this.setState({
                data : this.state.data
            });
          });
          
        //REMOVED
        firebase.database().ref('data').on('child_removed', snapshot => {
            this.state.data = this.state.data.filter(film => film.id !== snapshot.key);

            this.setState({
                data: this.state.data
            });
        });
    }

    render(){
        console.log(this.state.data);
        return(
            <div>
                <FormAddFilm />
                <Film data={this.state.data}/>
            </div>
        )
    }
}

export default Films;