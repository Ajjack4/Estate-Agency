import './Listings.css'

// eslint-disable-next-line react/prop-types
const Listings = ({ image,location }) => {
  return (
    <div>
      <div className="property-card">
      <img src={image} alt="Property" className="property-image" />
      <div className="property-info">
        
        <p className="property-location">{location}</p>
      </div>
    </div>
  
    </div>
  )
}

export default Listings
