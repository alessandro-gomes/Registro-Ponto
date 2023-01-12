import React, { Component } from 'react';
import $ from "jquery";
import Cabecalho from './Cabecalho';
import { Map, Marker } from "pigeon-maps"

class Geolocalizacao extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.registrar.bind(this);
    }

    componentDidMount() {
        let self = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            self.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        });

    }

    registrar = () => {
        let self = this;
        $.ajax({
            url: 'http://localhost:8080/registroPonto/salvar',
            type: 'POST',
            data: {
                latitude: self.state.latitude,
                longitude: self.state.longitude
            },
            success: function (result) {
                alert("Registro salvo com sucesso");
                window.open("/foto/" + result.id, "_self")
            }
        });
    }

    render() {
        if (!this.state.latitude && !this.state.longitude) {
            return <div><h3 style={{ marginTop: '300px', marginBottom: '1px' }}>Obtenha sua localização</h3>
                <span>Permita acesso no seu navegador.</span></div>
        }

        return (
            <div>
                <Cabecalho />
                <h3 style={{ marginTop: '20px', marginBottom: '1px' }}>Obtenha sua localização</h3>
                <span>Permita acesso no seu navegador.</span>
                <br />
                <Map height={280} width={460} defaultCenter={[this.state.latitude, this.state.longitude]} defaultZoom={16}>
                    <Marker width={50} color={'red'} anchor={[this.state.latitude, this.state.longitude]} />
                </Map>
                <br />
                <span>Devido ao não uso em celular, a <br /> localização pode não ser apresentada de <br /> forma correta.</span>
                <br />
                <br />
                <button onClick={this.registrar} style={{ cursor: 'pointer', borderRadius: "10px", width: '100px', height: '40px', backgroundColor: 'lightGreen', color: 'black' }}>
                    Confirmar
                </button>
            </div>
        );
    }
}

export default Geolocalizacao;