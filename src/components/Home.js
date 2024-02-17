const Home = ({ home, handleFave }) => {
  let faveButtonClass = "favoriteButton"
  if (home.favorite) { faveButtonClass = "favoriteButton highlighted" }

  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
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
        <div class="tagsContainer">
          {home.tags.forEach((tag) => (
            <p class="tags">{tag}</p>
          ))}
        </div>
        <p class="description">
          {home.description}
        </p>
      </div>
    </div>
  )
}

export default Home