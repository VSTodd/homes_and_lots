import Lot from "./Lot"
import { useState, useEffect} from "react";

const Lots = ({ lots, handleAddModal, handleFave }) => {
  const [favorites, setFavorites] = useState(false);
  const [buttonText, setButtonText] = useState("Show Saved Lots");

  const showSaved = (event) => {
    event.preventDefault;
    if (buttonText == "Show Saved Lots") {
      setFavorites(true);
      setButtonText("Show All Lots");
    } else {
      setFavorites(false);
      setButtonText("Show Saved Lots");
    }
  }

  const filterSavedLots = (lots) => {
    return lots.filter((lot) => lot.favorite);
  }

  if (favorites) {
    return (
      <div className="lotsContainer">
        <button className="button" onClick={showSaved}>{buttonText}</button>
        <div className="lotsList">
          {filterSavedLots(lots).map((lot) => ( 
            <a onClick={(e) => handleAddModal(lot, "lot", e)}><Lot key={lot.lotId} lot={lot} handleFave={handleFave} /></a>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="lotsContainer">
        <button className="button" onClick={showSaved}>{buttonText}</button>
        <div className="lotsList">
          {lots.map((lot) => ( 
            <a onClick={(e) => handleAddModal(lot, "lot", e)}><Lot key={lot.lotId} lot={lot} handleFave={handleFave} /></a>
          ))}
        </div>
      </div>
    )
  }
}
export default Lots