import React, { Component } from 'react';

class VisualizarEvento extends Component {
    constructor() {
        super();
        this.state = {
            nombre: "",
            categoria: "",
            fecha: "",
            hora: "",
            lugar: "",
            cantidad: "",
            detalle: "",
            eventos:[]
        };
        //this.Validacion = this.Validacion.bind(this);

    }

    componentDidMount(){
        this.obtain();
    }
    
    obtain() {
        fetch('http://localhost:3001/api/tasks/')
            .then(res => res.json())
            .then(data =>  {
                this.setState({eventos: data});
                console.log(this.state.eventos);
            })
            .catch(ex => console.error(ex));
    }


    render() {
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
                            <th scope="col">Lugar</th>
                            <th scope="col">Detalle</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.eventos.map((data) => {
                                return(
                                    <tr>
                                        <th scope = "row">1</th>
                                        <td>{data.nombre}</td>
                                        <td>{data.categoria}</td>
                                        <td>{data.fecha}</td>
                                        <td>{data.hora}</td>
                                        <td>{data.lugar}</td>
                                        <td>{data.detalle}</td>
                                        <td>{data.cantidad}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default VisualizarEvento;