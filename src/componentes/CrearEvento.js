import React, { Component } from "react";

class CrearEvento extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <h2>Formulario para Eventos</h2>
                <br/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Nombre</label>
                            <input type="ntext" className="form-control" id="inputNombre" placeholder="Nombre del evento" />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Categoria</label>
                            <input type="text" className="form-control" id="inputCategoria" placeholder="Categoria del evento" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Fecha</label>
                            <input type="text" className="form-control" id="inputFecha" placeholder="Fecha del evento" />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Hora</label>
                            <input type="text" className="form-control" id="inputHora" placeholder="Hora" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Lugar</label>
                        <input type="text" className="form-control" id="inputLugar" placeholder="Lugar del evento" />
                    </div>
                    <div className="form-group">
                        <label>Detalle</label>
                        <input type="text" className="form-control" id="inputDetalle" placeholder="Detalle del evento" />
                    </div>
                    <br/>
                    <button type="crear" className="btn btn-primary">Crear</button>
            </div>
        );

    }

}

export default CrearEvento;