import React, { Component } from "react";
import axios from 'axios';
class CrearEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        nombre: "",
        email: "",
        contraseña: "",
        cuenta: ""
    };

    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }
    // save = () => {
    //     axios.post("http://localhost:3001/api/tasks/", { nombre: this.state.nombre, categoria: this.state.categoria,
    //     fecha: this.state.fecha, hora: this.state.hora, lugar: this.state.lugar, cantidad: this.state.cantidad,
    //     detalle: this.state.detalle })
    // .then(res => console.log(res))
    // .catch(ex => console.error(ex));
    // } 


    render() {
        return (
            <form className="input-mysize">
                <h3 className="text-center">Registrar usuario</h3>
                <div class="form-group">
                    <div class="form-group">
                        <label for="email">Nombre:</label>
                        <input type="email" class="form-control" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd"/>
                    </div>
                    <div class="form-group">
                        <label for="email">N° Cuenta:</label>
                        <input type="email" class="form-control" id="email"/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Registrarse</button>
                </div>
            </form>
                        );
                
                    }
                
                }
                
export default CrearEvento;