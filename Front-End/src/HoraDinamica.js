import React, { Component } from 'react';

class HoraDinamica extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: new Date()};
        this.timer.bind(this);
    }
 
    componentDidMount() {
        setInterval(this.timer, 1000);
    }

    timer = () => {
        this.setState({data: new Date()});
    }

    render() {
        return (
            <div>
                <h2 style={{ marginTop: '-5px' }}><span>{this.state.data.toLocaleTimeString()}</span></h2>
            </div>
        );
    }
}

export default HoraDinamica;