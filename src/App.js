import './App.css';
import Header from './header';
import Headliner from './headliner';
import Blurbs from './blurbs'
import MeetGreet from './meet&greet'
import Footer from './footer'


function App() {
  return (
    <div className="App">
     <Header />
    
     <Headliner />

     <Blurbs />

     <MeetGreet />

     <Footer />
    </div>
  );
}

export default App;
