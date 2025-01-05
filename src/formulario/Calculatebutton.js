import './calcform.css';
import React from 'react';

const CalculateButton = () => {

  return (
    <React.Fragment>
        <tr>
		    <td colspan="2">
			    <input type="button" value="Obtener valores" onclick="obtenerValores()" />
			    <button type="reset">Reiniciar</button>
		    </td>
	    </tr>
    </React.Fragment>
  );
}

export default CalculateButton;