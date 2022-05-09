import "./App.css";
import { AllRoutes } from './Routes/Routes'
import { Navbar } from './components/HomePage/Navbar'
import { Footer } from './components/HomePage/Footer'

function App() {
  return <div className="App">
    <Navbar />
    <AllRoutes/>
    <Footer/>
  </div>;
}

export default App;
