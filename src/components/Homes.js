import Home from "./Home"
import { useState, useEffect} from "react";

const Homes = ({ homes, handleAddModal, handleFave }) => {
  const [favorites, setFavorites] = useState(false);
  const [buttonText, setButtonText] = useState("Show Saved Homes");
  
  const showSaved = (event) => {
    event.preventDefault;
    if (buttonText == "Show Saved Homes") {
      setFavorites(true);
      setButtonText("Show All Homes")
    } else {
      setFavorites(false);
      setButtonText("Show Saved Homes");
    }
  }

  const filterSavedHomes = (homes) => {
    return homes.filter((home) => home.favorite);
  }
  if (favorites) {
    return (
      <div className="homesListContainer">
        <button className="button" onClick={showSaved}>{buttonText}</button>
        <div className="homesList">
          {filterSavedHomes(homes).map((home) => ( 
            <a onClick={(e) => handleAddModal(home, "home", e)}><Home key={home.homePlanId} home={home} handleFave={handleFave} /></a>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="homesListContainer">
        <button className="button" onClick={showSaved}>{buttonText}</button>
        <div className="homesList">
          {homes.map((home) => ( 
            <a onClick={(e) => handleAddModal(home, "home", e)}><Home key={home.homePlanId} home={home} handleFave={handleFave} /></a>
          ))}
        </div>
      </div>
    )
  }
}

export default Homes