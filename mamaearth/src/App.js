import "./App.css";
import { AllRoutes } from './Routes/Routes'
import { Navbar } from './components/HomePage/Navbar'

function App() {
  return <div className="App">
    <Navbar />
    <AllRoutes/>
  </div>;
}

export default App;
