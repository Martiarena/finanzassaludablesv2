import React from 'react';
import Options from './Options.js';

const RadioButtons = props => {
  /* const {description, id1, id2, nameradio, option1, option2} = props // Another way of de-structuring*/
  const {description} = props

  function OptionsList(){
    const options = [
      {
        id: 0, 
        idradio: "soltero", 
        nameradio: "estado", 
        value: 0, 
        description: "Soltero pero feliz"
      },
      {
        id: 1, 
        idradio: "relacion", 
        nameradio: "estado", 
        value: 1, 
        description: "Tengo waifu xd"
      }
    ]
    const optionsForm = options.map(optionatri => 
      <Options key={optionatri.id} optionatri={optionatri}></Options>
    )
    return <div>{optionsForm}</div>
  }
  return (
    <React.Fragment>
      <div>{description}</div>
      <div>
        <OptionsList />
      </div>
    </React.Fragment>
  );
}

export default RadioButtons;