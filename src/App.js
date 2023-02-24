import logo from './logo.svg';
import './App.css';
import Header from './compnets/layouts/Header';
import Landing from './compnets/layouts/Landing';
import Footer from './compnets/layouts/Footer';
import { BrowserRouter} from 'react-router-dom'
import Routers from './compnets/Routers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     Hello Alyaa
     <Header></Header>
     <Routers></Routers>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
