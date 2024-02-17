import { Route, Routes, Link, useNavigate, useSearchParams } from "react-router-dom"
import Homes from "./Homes"
import HomeModal from "./HomeModal"
import Lots from "./Lots"
import LotModal from "./LotModal"
import { getHomes, getLots } from "../services/properties"
import { useState, useEffect} from "react";

export function App() {
  const [homes, setHomes] = useState([]);
  const [lots, setLots] = useState([]);
  const [error, setError] = useState(false);
  const [homeModal, setHomeModal] = useState({});
  const [lotModal, setLotModal] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const data = await getHomes();
        setHomes(data);
      } catch (e) {
        setError(true);
      }
    };
    fetchHomes();
  }, []);

  useEffect(() => {
    const fetchLots = async () => {
      try {
        const data = await getLots();
        setLots(data);
      } catch (e) {
        setError(true);
      }
    };
    fetchLots();
  }, []);

  const handleAddModal = (property, type, event) => {
    event.preventDefault();
    if (type === "home") {
      navigate('?house=' + property.homePlanId)
      setHomeModal(property)
    } else if (type === "lot") {
      navigate('?lot=' + property.lotId)
      setLotModal(property)
    }
    window.scrollTo({top: 0})
  }

  const handleRemoveModal = (type, event) => {
    event.preventDefault();
    if (type === "home") {
      navigate('/homes')
      setHomeModal({})
    } else if (type === "lot") {
      navigate('/lots')
      setLotModal({})
    }
  }

  const handleHomeFave = (id, home, event) => {
    event.preventDefault();
    event.stopPropagation();
    home.favorite ? home.favorite = false : home.favorite = true;
    const homeIndex = findById(id, homes);
    const tempHomes = [...homes];
    tempHomes[homeIndex] = home;
    setHomes(tempHomes);
  }

  const handleLotFave = (id, lot, event) => {
    event.preventDefault();
    event.stopPropagation();
    lot.favorite ? lot.favorite = false : lot.favorite = true;
    const lotIndex = findById(id, lots);
    const tempLots = [...lots];
    tempLots[lotIndex] = lot;
    setLots(tempLots);
  }

  const findById = ((id, array) => {
    let foundIndex = -1
    for (index = 0; index < array.length; index++) {
      if (array[index].homePlanId == id || array[index].lotId == id) {
        foundIndex = index
        break
      }
    }
    return foundIndex
  }) 

  return (
    <>
    <div className="App">
      <div className="sidenav">
        <ul>
          <li>
            <Link to="/homes">Home Plans</Link>
          </li>
          <li>
            <Link to="lots">Lots</Link>
          </li>
        </ul>
      </div>
    

    <Routes>
      <Route path="/homes" element={<Homes homes={homes} handleAddModal={handleAddModal} handleFave={handleHomeFave}/>} />
      <Route path="/lots" element={<Lots lots={lots} handleAddModal={handleAddModal} handleFave={handleLotFave}/>} />
    </Routes>
    </div>
    
    <HomeModal home={homeModal} handleRemoveModal={handleRemoveModal} handleFave={handleHomeFave}/>
    <LotModal lot={lotModal} handleRemoveModal={handleRemoveModal} handleFave={handleLotFave}/>
    </>
  )
  
}

export default App
