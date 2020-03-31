import './App.css';

import React, { Component } from 'react';


class DidUpdate extends Component {

  state = {
    numero: 100
  }

  componentDidMount = () => {
    console.log("componentDidMount", this.state.numero)
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate - anterior", prevState.numero)
    console.log("componentDidUpdate - atual", this.state.numero)
  }


  // ao clicar no botao eu mudo o state
  muda = () => {
    // seta o novo valor e atualiza o componente
    this.setState({ numero: this.state.numero + 1 })
  }


  render() {
    return (
      <div>
        <div>{this.state.numero}</div>
        <button onClick={() => this.muda()}>Muda numero</button>
      </div>
    );
  }
}

export default DidUpdate