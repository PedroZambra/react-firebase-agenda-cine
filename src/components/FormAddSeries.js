import React, {Component} from 'react';
import * as firebase from 'firebase';

class FormAddSeries extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            seasons: '',
            totalEpisodes: '',
            dateViewEnd: '',
            next: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
        event.preventDefault(); //Evitamos la recarga de la web
        if (this.state.title !== '') {
            firebase.database().ref(this.props.nameFirebase).push({
                title: this.state.title,
                seasons: this.state.seasons,
                totalEpisodes: this.state.totalEpisodes,
                dateViewEnd: this.state.dateViewEnd,
                next: this.state.next,
            })
        } else {
            alert('Completa el título');
        }
    }

    render(){
        // console.log(this.state);
        return(
            <div className="formulario">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <p><input type="text" name="title" placeholder="Título" onChange={this.handleInput}></input></p>
                    <p><input type="text" name="seasons" placeholder="Temporadas" onChange={this.handleInput}></input></p>
                    <p><input type="text" name="totalEpisodes" placeholder="Total episodios" onChange={this.handleInput}></input></p>
                    <p><label>Terminada:</label> Si <input className="checkbox" type="radio" name="dateViewEnd" onChange={this.handleInput} value="yes"></input> No <input className="checkbox" type="radio" name="dateViewEnd" onChange={this.handleInput} value="no"></input></p>
                    <p>{(this.state.dateViewEnd==='no') ? <input type="text" name="next" placeholder="Próximo episodio que ver" onChange={this.handleInput}></input> : null}</p>
                    <p><input type="submit" value="AÑADIR" className="add"></input></p>
                </form>
            </div>
        )
    }
}

export default FormAddSeries;