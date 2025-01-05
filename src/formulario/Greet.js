import React from 'react';

const Greet = ({name, heroName}) => { // De-structure props
  
  return (
    <React.Fragment>
      <p className="saludo">Bienvenido {name} a.k.a. {heroName}</p>
    </React.Fragment>
  );
}

export default Greet;