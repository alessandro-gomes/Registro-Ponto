import React, { Component } from 'react';
import iconeClock from './icone-clock.png';
import Cabecalho from './Cabecalho';

class RegistroPonto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    continuaRegistro = () => {
        window.open("/geolocalizacao/", "_self")
    }

    paginaRegistrosSalvos = () => {
        window.open("/registrosSalvos/", "_self")
    }

    render() {
        return (
            <div style={{ marginTop: "10px" }}>
                <h4 style={{ marginBottom: "-20px" }}>Bem vindo</h4>
                <h2 style={{ marginBottom: "50px" }}>Registro de Ponto</h2>

                <Cabecalho />

                <label style={{ backgroundColor: "orange", color: "white", padding: "4px", borderRadius: "8px" }}>Aguardando Ponto</label>
                <br />
                <br />
                <button onClick={this.continuaRegistro} style={{ cursor: 'pointer', borderRadius: "10px", backgroundColor: "lightGreen", padding: "10px" }}>
                    <img style={{ width: '13px' }} src={iconeClock} /> <label style={{ cursor: 'pointer', fontSize: '15px' }}>Registrar</label>
                </button>
                <br/>
                <button onClick={this.paginaRegistrosSalvos} style={{cursor: 'pointer', borderRadius: "10px", backgroundColor: "lightblue", padding: "4px", marginTop: '10px', marginBottom: '10px' }}>
                    <label style={{cursor: 'pointer', fontSize: '14px' }}>Buscar registros</label>
                </button>
            </div>
        );
    }
}

export default RegistroPonto;