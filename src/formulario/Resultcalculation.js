import React, { Component } from 'react';
import Counter from './Counter.js';

class ResultCalculation extends Component {
  constructor() {
    super()
    this.state = {
      description: ''
    }
  }

  calculateIncome() {
    this.setState({
      description: 'Para Invertir:'
    })
  }

  render() {
    const {description} = this.state // De Structition in Class Component
    return (
      <React.Fragment>
        <div>
          {description}
        </div>
        <div>

        </div>
        <div className="botones-calcular">
		      <span>
			      <button onClick={() => this.calculateIncome()}>Obtener Valores</button>
			      <button type="reset">Reiniciar</button>
            <Counter addValue={1}></Counter>
		      </span>
	      </div>
      </React.Fragment>
    )
  }
}

export default ResultCalculation;