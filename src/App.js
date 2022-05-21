import './App.css';

import Home from './pages/home/Home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App container-fluid px-4">
      <div className="row d-flex">
        <div className="col-1 p-0"><Navbar/></div>
        <div className="col-11 p-0"><Home/></div>
      </div>
    </div>
  );
}

export default App;
