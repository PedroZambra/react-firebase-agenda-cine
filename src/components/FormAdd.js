import React, {Component} from 'react';
import * as firebase from 'firebase';

class FormAddFilm extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            dateView: '',
            place: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
        event.preventDefault(); //Evitamos la recarga de la web
        if (this.state.title !== '' && this.state.dateView !== '' && this.state.place !== '') {
            firebase.database().ref('data').push({
                title: this.state.title,
                dateView: this.state.dateView,
                place: this.state.place
            })
        } else {
            alert('Completa todos los campos.');
        }
    }

    render(){
        // console.log(this.state);
        return(
            <div className="formulario">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <p><input type="text" name="title" placeholder="Título" onChange={this.handleInput}></input></p>
                    <p><input type="text" name="place" placeholder="Cine" onChange={this.handleInput}></input></p>
                    <p><input type="text" name="dateView" placeholder="Fecha vista" onChange={this.handleInput}></input></p>
                    <p><input type="submit" value="AÑADIR" className="add"></input></p>
                </form>
            </div>
        )
    }
}

export default FormAddFilm;