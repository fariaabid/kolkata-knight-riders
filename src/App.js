import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <h1 className="m-5">Bootstrap is added</h1>
      <button className="btn btn-danger"> <FontAwesomeIcon icon={faCoffee} /> add me</button>
    </div>
  );
}

export default App;
