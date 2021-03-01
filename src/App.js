import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Players from './Components/Players/Players';


function App() {

  return (
    <div className="container">
      <h2 className='text-center text-primary '> Kolkata Knight Riders</h2>
       <h3 className='text-center text-dark py-3'>Your team,Your Choice...Pick your dream 11 now...!</h3>
      <div className="d-flex flex-wrap">
        <Players></Players>
      </div>
    </div>
  );
}

export default App;