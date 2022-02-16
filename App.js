import './App.css';
import Header from './Components/Header';
import LinkShortener from './Components/LinkShortener';
import Stats from './Components/Stats';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <LinkShortener />
     <Stats />
     <Footer />
    </div>
  );
}

export default App;
