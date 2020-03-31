import './App.css';

import React, { Component } from 'react';

class Ciclos extends Component {

  state = {
    numero: 1
  }

  // apos o componente montar eu mudo o state
  componentDidMount = () => {
    // mostra o valor anterior
    console.log(this.state.numero)
    // seta o novo valor e atualiza o componente
    this.setState({ numero: 2 })
  }

  // ao clicar no botao eu mudo o state
  muda = () => {
    // mostra o valor anterior
    console.log(this.state.numero)
    // seta o novo valor e atualiza o componente
    this.setState({ numero: 5 })
  }


  render() {
    return (
      <div>
        <div>{this.state.numero}</div>
        <button onClick={this.muda}>Muda numero</button>
      </div>
    );
  }
}

export default Ciclos