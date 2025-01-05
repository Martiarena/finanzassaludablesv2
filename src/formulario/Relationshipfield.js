import React from 'react';

function RelationshipField() {

  return (
    <React.Fragment>
      <tr>
        <td>¿Tienes pareja o waifu?:</td>
        <td>
          <input type="radio" id="soltero" name="estado" value="0" />Soltero pero feliz<br></br>
          <input type="radio" id="relacion" name="estado" value="1" />Tengo waifu xd
        </td>
      </tr>
    </React.Fragment>
  );
}

export default RelationshipField;