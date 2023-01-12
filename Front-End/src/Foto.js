import React, { Component } from 'react';
import Cabecalho from './Cabecalho';
import Webcam from "react-webcam";
import $ from "jquery";

class Foto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.salvarFoto.bind(this);
    }

    salvarFoto = (base64) => {
        let self = this;
        $.ajax({
            url: 'http://localhost:8080/registroPonto/salvarFoto/' + self.props.id,
            type: 'POST',
            data: {
                imageSrc: base64
            },
            success: function (result) {
                alert('Foto salva com sucesso!');
                window.open("/", "_self")
            }
        });
    }

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };
        return (
            <div>
                <Cabecalho />
                <h3 style={{marginBottom: '0px'}}>Uma selfie atual sua.</h3>
                <span>Use um ambiente iluminado.</span>
                <div style={{ marginTop: '-220px' }}>
                    <Webcam
                        audio={false}
                        height={720}
                        screenshotFormat="image/jpeg"
                        width={450}
                        videoConstraints={videoConstraints}
                    >
                        {({ getScreenshot }) => (
                            <div style={{ textAlign: 'center', marginTop: '-200px' }}>
                                <button
                                    onClick={() => {
                                        const imageSrc = getScreenshot();
                                        this.salvarFoto(imageSrc);
                                    }}
                                    style={{ position: 'relative', cursor: 'pointer', width: '150px', height: '40px', borderRadius: '10px', backgroundColor: 'lightgreen', fontSize: '15px' }}
                                >
                                    Tirar Foto
                                </button>
                            </div>
                        )}
                    </Webcam>
                </div>
            </div>
        );
    }
}

export default Foto;