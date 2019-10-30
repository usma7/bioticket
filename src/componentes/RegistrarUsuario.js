import React, { Component } from "react";
import axios from 'axios';
class RegistrarUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        nombre: "",
        email: "",
        password: ""
    };

    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }
    save = () => {
        axios.post("http://localhost:3001/api/users/", { nombre: this.state.nombre, email: this.state.email,
        password: this.state.password })
    .then(res => console.log(res))
    .catch(ex => console.error(ex));
    } 


    render() {
        return (
            <form className="input-mysize">
                <h3 className="text-center">Registrar usuario</h3>
                <div className="form-group">
                    <div className="form-group">
                        <label for="name">Nombre:</label>
                        <input onChange={this.onKeyPress('nombre')} type="text" className="form-control" placeholder="Nombre" data-test='name-user' />
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input onChange={this.onKeyPress('email')} type="email" className="form-control" placeholder="Email" data-test='email-user'/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input onChange={this.onKeyPress('password')} type="password" className="form-control" placeholder="Password" data-test='password-user'/>
                    </div>
                </div>
                <button onClick={this.save} type="submit" className="btn btn-primary mb-2">Registrarse</button>
            </form>
                );
                
            }
                
        }
                
export default RegistrarUsuario;