import './calcform.css';
import Greet from './Greet.js';
import MonthlyIncomeField from './Monthlyincomefield.js';
import RadioButtons from './Radiobuttons.js';
import ResultCalculation from './Resultcalculation.js';

function Mainform(){

  return (
    <div className='Calculadora'>
      <Greet name="Raul" heroName="Crimsondeath" />
      <MonthlyIncomeField />
      <RadioButtons description="¿Tienes pareja o waifu?:" id1="soltero" id2="relacion" nameradio="estado" option1="Soltero pero feliz" option2="Tengo waifu xd" />
      <RadioButtons description="¿Buscas buen karma?:" id1="nokarma" id2="karma" nameradio="karma" option1="No creo en el Karma" option2="Si :D" />
      <ResultCalculation></ResultCalculation>
    </div>
  );
}

export default Mainform;