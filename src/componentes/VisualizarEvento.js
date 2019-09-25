import React, { Component } from 'react';
import { todos } from '../todos.json';
class VisualizarEvento extends Component {
    constructor() {
        super();
        this.state = {
            todos
        };
        //this.Validacion = this.Validacion.bind(this);

    }
    render() {
        const todo = this.state.todos.map((todos, i) => {
            return (
                <tr>
                    <th scope="row">1</th>
                    <td>{todos.nombreevento}</td>
                    <td>{todos.categoria}</td>
                    <td>{todos.fecha}</td>
                    <td>{todos.hora}</td>
                    <td>{todos.detalle}</td>
                    <td>{todos.lugar}</td>
                    <td>{todos.disponibilidad}</td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {/*Encabezado de la tabla de eventos */}
                            <th scope="col">Nro Evento</th>
                            <th scope="col">Nombre del Evento</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Detalle</th>
                            <th scope="col">Lugar</th>
                            <th scope="col">Disponibilidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default VisualizarEvento;