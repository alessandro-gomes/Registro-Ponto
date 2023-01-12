import React, { Component } from 'react';
import engrenagem from './engrenagem.png';
import HoraDinamica from './HoraDinamica';

class Cabecalho extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var data = new Date();

        return (
            <div>
                <img src={engrenagem} />
                <h3 style={{ marginBottom: '-20px', marginTop: '-8px' }}>{saudacao(data.toLocaleTimeString())}</h3>
                <h2>Administrador</h2>
                <span>{data.toLocaleDateString()} - {getDay(data.getDay())}</span>
                <br />
                <HoraDinamica />
            </div>
        );
    }
}

function getDay(numero) {
    switch (numero) {
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        case 0:
            return 'Domingo';
    }
}

function saudacao(hora) {
    if (hora >= '05:00:00' & hora < '12:00:00') {
        return 'Bom dia';
    } else if (hora >= '12:00:00' & hora < '18:00:00') {
        return 'Boa tarde';
    } else {
        return 'Boa noite';
    }
}

export default Cabecalho;