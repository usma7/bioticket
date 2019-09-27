import React, { Component } from 'react';
import CrearEvento from './CrearEvento';
import VisualizarEventos from './VisualizarEvento';
class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            estshowCrear: true,
            estshowVisualizar: false
        };
    }
    showCrear() {
        this.setState({ estshowCrear: true, estshowVisualizar: false});
    }
    showVisualizar() {
        this.setState({ estshowCrear: false, estshowVisualizar: true});
    }
    render() {
        return (
            <div className="wrapper">
                {/**Contenerdor del sidebar */}
                <nav id="sidebar">
                    <ul className="list-unstyled components">

                        <li className="menu-item nav-item dropdown">
                            <a className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">Mi Perfil</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" type="button" onClick="#po">Actualizar Informacion</a>
                                <a className="dropdown-item" type="button" onClick="#lo">Cancelar bioticket</a>
                                <a className="dropdown-item" type="button" onClick="#as">Ceder bioticket</a>
                            </div>
                        </li>
                        <li>
                            <a type="button" onClick={this.showCrear.bind(this)}>Crear Eventos</a>
                        </li>
                        <li>
                            <a type="button" onClick={this.showVisualizar.bind(this)}>Consultar Eventos</a>
                        </li>
                        <li>
                            <a type="button" onClick="#">Noticias</a>
                        </li>
                    </ul>
                </nav>

                {/*Page Content Holder*/}
                <div id="content">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            {this.state.estshowVisualizar && <VisualizarEventos />}
                            {this.state.estshowCrear && <CrearEvento />}
                        </div>
                    </nav>

                </div>

            </div>
        );
    }
}

export default Sidebar;