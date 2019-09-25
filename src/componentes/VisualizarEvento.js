import React,{ Component } from 'react';

class VisualizarEvento extends Component {
    constructor() {
        super();
        this.state = {
            nom_event: '',
            categoria: '',
            fecha: ''
        };
        //this.Validacion = this.Validacion.bind(this);
    
    }
    render() {
        return (
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            {/*Encabezado de la tabla de eventos */}
                            <th scope="col">Nombre del Evento</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Ciclo de llenado de eventos, que no me acuerdo como se hace.*/}
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default VisualizarEvento;