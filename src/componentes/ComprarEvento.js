import React, { Component } from "react";
import axios from 'axios';
//import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";

class ComprarEvento extends Component {
    constructor() {
        super();
        this.state = {
            nombre: "",
            cantidad: "",
            eventos:[]
        };
        //this.Validacion = this.Validacion.bind(this);
    }

    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }
    
    componentDidMount(){
        this.obtain(fetch);
    }
    
    obtain(fetch) {
        fetch('http://localhost:3001/api/tasks/cargar/eventos')
            .then(res => res.json())
            .then(data =>  {
                this.setState({eventos: data});
                console.log(this.state.eventos);
            })
            .catch(ex => console.error(ex));
    }

    save = () => {
        axios.post("http://localhost:3001/api/boletas", { nombre: this.state.nombre, cantidad: this.state.cantidad})
    .then(res => console.log(res))
    .catch(ex => console.error(ex));
    } 


render() {
    return (
        <div>
            <form className="input-mysize" action={this.save}>
                <h3 className="text-center">Comprar boletas</h3>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <label>Seleccionar evento</label>
                        <select name="evento" id="evento" onChange={this.onKeyPress('nombre')} className="form-control">
                            {this.state.eventos.map((data) => {
                                return(
                                    <option>{data.nombre}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label>Cantidad de boletas</label>
                        <input onChange={this.onKeyPress('cantidad')} type="text" className="form-control" placeholder="Maximo 3 boletas por persona"/>
                    </div>
                </div>
                <button onClick={this.save} type="submit" className="btn btn-primary mb-2">Comprar</button>
            </form>
        </div>
        );
        }
}
    
        
export default ComprarEvento;