const LotModal = ({ lot, handleRemoveModal, handleFave }) => {
  if (!lot.address) {
    return null
  }

  const splitAddress = lot.address.split(", ")
  const streetAddress = splitAddress[0]
  const cityState = splitAddress[1] + ", " + splitAddress[2];

  const squareFeet = Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(Number(lot.acres) * 43560)

  let faveButtonClass = "favoriteButton"
  if (lot.favorite) { faveButtonClass = "favoriteButton highlighted" }

  return (
    <div id="modal-container">
      <div className="screen" onClick={(e) => handleRemoveModal("lot", e)}></div>
      <div id="modal">
        <div className="modalContainer"></div>
          <div className="selectedCardContainer">
          <div className="modalImageContainer">
            <img
              src={lot.image}
              alt={streetAddress.split(" ").join("-").toLowerCase}
            />
          </div>
          <div className="modalInformationContainer">
            <div className="lotInfoContainer">
              <h2>{streetAddress}</h2>
              <p id="cityState">{cityState}</p>
              <p id="acreage">{lot.acres} acres - {squareFeet} sqft</p>
              <p className="lotDescription"> {lot.description}</p>
            </div>
          </div>
          <div>
            <button className={faveButtonClass} onClick={(e) => handleFave(lot.lotId, lot, e)}>
            <img src={"https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f5a4.svg"} alt="heart icon" />
            </button>
          </div>
        
      </div>
    </div>
  </div>
  )
}

export default LotModal