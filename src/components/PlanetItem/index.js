// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="item-container">
      <img className="planet-img" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
