import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#162b4e' }}>
      <Router>
        <NavBar />
        <Public />
        <Footer />
      </Router>
    </div>
  );
}

export default App;