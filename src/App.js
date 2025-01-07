import './App.css';
import Mainform from './formulario/Mainform.js';
import Maintitle from './common/maintitle.js';
import Eventbind from './formulario/Eventbind.js';
import ParentComponent from './formulario/ParentComponent.js';
import UserGreeting from './formulario/UserGreeting.js';

function App() {

  return (
    <div className={'fondo'}>
      <UserGreeting />
      <ParentComponent />
      <Eventbind />
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