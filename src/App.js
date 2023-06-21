import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Contacts from './Pages/Contacts';
import Sites from './Pages/Sites';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home/> */}
      {/* <Contacts/> */}
      <Sites/>
      <Footer/>
    </div>
  );
}

export default App;
