import './App.css';
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import RegistroPonto from './RegistroPonto';
import Foto from './Foto';
import RegistrosSalvos from './RegistrosSalvos';
import Geolocalizacao from './Geolocalizacao';

function App() {

  const FotoWrapper = () => {
    const { id } = useParams();
    return <Foto id={id} />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<RegistroPonto />} path="/" exact />
          <Route element={<Geolocalizacao />} path="/geolocalizacao" />
          <Route element={<RegistrosSalvos />} path="registrosSalvos" />
          <Route element={<FotoWrapper />} path="/foto/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
