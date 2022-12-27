import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projetos from './components/pages/Projetos';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path= "/" element={<Home />}/> 
          <Route path= "/projetos" element={<Projetos />}/>
          <Route path= "/empresa" element={<Empresa />}/> 
          <Route path= "/contato" element={<Contato />}/> 
          <Route path= "/novoprojeto" element={<NovoProjeto />}/>    
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
