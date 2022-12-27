import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Container from './components/layout/Container';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/novoprojeto">Novo Projeto</Link>
      </div>

      <Container customClass="min-height">
        <Routes>
          <Route path= "/" element={<Home />}/> 
          <Route path= "/empresa" element={<Empresa />}/> 
          <Route path= "/contato" element={<Contato />}/> 
          <Route path= "/novoprojeto" element={<NovoProjeto />}/>    
        </Routes>
      </Container>

      <footer>
        <p>Footer</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
