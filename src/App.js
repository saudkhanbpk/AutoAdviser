import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Signup from './Signup';
import Phone from './Phone';

function App() {
  return (
    <div className="App">
    <Router>
     
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/phone' element={<Phone />} />

        </Routes>
      
    </Router>
      
    </div>
  );
}

export default App;
