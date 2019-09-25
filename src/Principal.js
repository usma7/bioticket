import React, { Component } from 'react';
import Navbar from './componentes/Navbar';
import Sidebar from './componentes/Sidebar';
class Principal extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Sidebar />
            </div>
        );
    }
}

export default Principal;
