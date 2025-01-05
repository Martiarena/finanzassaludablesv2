import './App.css';
import Mainform from './formulario/Mainform.js';
import Maintitle from './common/maintitle.js';

function App() {

  const nombre = <strong>Gonzalo</strong>;
  const edad = <p>27</p>;
  const email = <p>email@gmail.com</p>;

  return (
    
    <div className={'fondo'}>
      <div className='App'>
        <header className="App-header">
          <Maintitle />
        </header>
        <div>
          <Mainform />
        </div>
      </div>
    </div>
  );
}

export default App;