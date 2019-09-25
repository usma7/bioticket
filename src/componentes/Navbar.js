import React, { Component } from 'react';
import $ from 'jquery';
import img from './logo.png'
class Navbar extends Component {
    constructor() {
        super();
        this.aparecer = this.aparecer.bind(this);
    }
    aparecer() {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    };
    render() {
        return (
            <nav >
                <nav className="navbar navbar-dark bg-dark">
                    <button className="btn btn-Link" type="button"  id="sidebarCollapse" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={this.aparecer}>
                        <i className="navbar-toggler-icon"></i> 
                    </button>
                    <div>
                        <img src={img} Style="width:120px"></img>
                    </div>
                    
                </nav>
            </nav>
        );
    }
}
export default Navbar;