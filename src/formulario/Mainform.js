import './calcform.css';
import Greet from './Greet.js';
import MonthlyIncomeField from './Monthlyincomefield.js';
import RadioButtons from './Radiobuttons.js';
import ResultCalculation from './Resultcalculation.js';

class Mainform extends Component {
  constructor(props) {
    super(props)

    this.state = {
      MonthlyIncomeField: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form className='Calculadora' onSubmit={this.handleSubmit}>
        <Greet name="Raul" heroName="Crimsondeath" />
        <MonthlyIncomeField />
        <RadioButtons description="¿Tienes pareja o waifu?:" />
        <RadioButtons description="¿Buscas buen karma?:" />
        <ResultCalculation />
      </form>
    )
  }
}

export default Mainform;