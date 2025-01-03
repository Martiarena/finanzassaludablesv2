import './App.css';
import Mainform from './formulario/Mainform.js';

function App() {

  const nombre = <strong>Gonzalo</strong>;
  const edad = <p>27</p>;
  const email = <p>email@gmail.com</p>;

  return (
    <div className={'fondo'}>
      <div className='App'>
        <header className="App-header">
          <h1>
            Finanzas Saludables
          </h1>
        </header>
        <div>
          Bienvenido {nombre}
          <Mainform />
        </div>
      </div>
    </div>
  );
}

export default App;