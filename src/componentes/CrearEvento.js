import React, { Component } from "react";
import axios from 'axios';

class CrearEvento extends Component {


    state = {
        nombre: "",
        categoria: "",
        fecha: "",
        hora: "",
        lugar: "",
        cantidad: "",
        detalle: ""
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

				axios.post("http://localhost:3001/api/tasks/", { nombre: this.state.nombre, categoria: this.state.categoria,
				fecha: this.state.fecha, hora: this.state.hora, lugar: this.state.lugar, cantidad: this.state.cantidad,
				detalle: this.state.detalle })
            .then(res => console.log(res))
            .catch(ex => console.error(ex));

    }

    render() {
        return (
            <div className="container">

                <h2>Formulario para Eventos</h2>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label >Nombre</label>
                        <input onChange={this.onKeyPress('nombre')} value={this.state.name} type="ntext" className="form-control" id="inputNombre" placeholder="Nombre del evento" />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Categoria</label>
                        <input onChange={this.onKeyPress('categoria')} value={this.state.categoria}  type="text" className="form-control" id="inputCategoria" placeholder="Categoria del evento" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label >Fecha</label>
                        <input onChange={this.onKeyPress('fecha')} value={this.state.fecha} type="text" className="form-control" id="inputFecha" placeholder="Fecha del evento" />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Hora</label>
                        <input onChange={this.onKeyPress('hora')} value={this.state.hora} type="text" className="form-control" id="inputHora" placeholder="Hora" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label >Lugar</label>
                        <input onChange={this.onKeyPress('lugar')} value={this.state.lugar} type="text" className="form-control" id="inputFecha" placeholder="Lugar del evento" />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Cantidad</label>
                        <input onChange={this.onKeyPress('cantidad')} value={this.state.cantidad} type="text" className="form-control" id="inputHora" placeholder="Capacidad del evento" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Detalle</label>
                    <input onChange={this.onKeyPress('detalle')} value={this.state.detalle} type="text" className="form-control" id="inputDetalle" placeholder="Detalle del evento" />
                </div>
                <br />
                <button onClick={this.save} type="crear" className="btn btn-primary">Crear</button>
            </div>
        );

    }

}

export default CrearEvento;