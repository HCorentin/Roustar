import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import ListeLieux from "./components/ListeLieux";
import Carte from "./components/Carte";

function App() {
  const [lieux, setLieux] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/lieux")
      .then(res => setLieux(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Le guide du Roustar 🎵</h1>
      <ListeLieux lieux={lieux} />
      <Carte lieux={lieux} />
    </div>
  );
}

export default App;
