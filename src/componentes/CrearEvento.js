import React, { Component } from "react";
import axios from 'axios';
class CrearEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
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
            <form className="input-mysize" action={this.save}>
                <h3 className="text-center">Crear eventos</h3>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <label>Nombre del evento</label>
                        <input onChange={this.onKeyPress('nombre')} type="text" className="form-control" placeholder="Nombre evento" data-test='name-event' />
                    </div>
                    <div className="col-sm-6">
                        <label>Categoría</label>
                        <select onChange={this.onKeyPress('categoria')} className="form-control" >
                            <option>Concierto</option>
                            <option>Comedia</option>
                            <option>Deporte</option>
                            <option>Politica</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <label>Fecha del evento</label>
                        <input onChange={this.onKeyPress('fecha')} type="date" className="form-control" placeholder="fecha" />
                    </div>
                    <div className="col-sm-6">
                        <label>Hora del evento</label>
                        <input onChange={this.onKeyPress('hora')} type="text" className="form-control" placeholder="hora" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <label>Lugar del evento</label>
                        <select onChange={this.onKeyPress('lugar')} className="form-control" >
                            {/* <option>Seleccione alguno</option> */}
                            <option>Atanasio</option>
                            <option>RedBull stadium</option>
                            <option>la macarena</option>
                            <option>UDEM</option>
                            <option>UPB</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label>Disponibilidad</label>
                        <input onChange={this.onKeyPress('cantidad')} type="number" className="form-control" placeholder="numero de personas" />
                    </div>

                </div>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <label>Detalles del evento</label>
                        <textarea onChange={this.onKeyPress('detalle')} className="form-control" rows="3" />
                    </div>
                </div>
                <button onClick={this.save} type="submit" className="btn btn-primary mb-2">Guardar</button>
            </form>
        );

    }

}

export default CrearEvento;