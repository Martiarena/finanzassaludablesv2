import './calcform.css';

function RelationshipField() {

  return (
    <div>¿Tienes pareja o waifu?:
      <input type="radio" id="soltero" name="estado" value="0" /><label for="soltero">Soltero pero feliz</label>
      <input type="radio" id="relacion" name="estado" value="1" /><label for="relacion">Tengo waifu xd</label>
    </div>
  );
}

export default RelationshipField;