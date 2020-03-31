import React, { Component } from 'react';
import './App.css';

class Ciclos extends Component {

  state = {
    numero: 100,
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.numero !== prevState.numero) {
      console.log("componentDidUpdate", "O valor mudou!")
    }
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

export default Ciclos