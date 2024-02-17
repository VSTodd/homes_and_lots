const HomeModal = ({ home, handleRemoveModal, handleFave }) => {
  if (!home.name) {
    return null
  }

  let faveButtonClass = "favoriteButton"
  if (home.favorite) { faveButtonClass = "favoriteButton highlighted" }

  return (
    <div id="modal-container">
      <div className="screen" onClick={(e) => handleRemoveModal("home", e)}></div>
      <div id="modal">
        <div className="modalContainer"></div>
          <div className="selectedCardContainer">
            <div className="modalImageContainer">
              <img
                src={home.image}
                alt={home.name.split(" ").join("-").toLowerCase}
              />
              <div>
              <button className={faveButtonClass} onClick={(e) => handleFave(home.homePlanId, home, e)}>
                  <img src={"https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f5a4.svg"} alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="homeInfoContainer">
              <h3>{home.name}</h3>
              <p id={home.homePlanId}>{home.numBeds} beds - {home.numBaths} baths - {home.sqft} sqft</p>
              <div className="tagsContainer">
                {home.tags.forEach((tag) => (
                  <p class="tags">{tag}</p>
                ))}
              </div>
              <p className="description">
                {home.description}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomeModal