import './calcform.css';
import MonthlyIncomeField from './Monthlyincomefield.js';
import RelationshipField from './Relationshipfield.js' ;

function Mainform(){

  return (
    <form className='Calculadora' action="">
        <MonthlyIncomeField />
        <RelationshipField />
    </form>
  );
}

export default Mainform;