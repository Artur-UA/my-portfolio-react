import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      {/* <Contacts/> */}
      <Footer/>
    </div>
  );
}

export default App;
