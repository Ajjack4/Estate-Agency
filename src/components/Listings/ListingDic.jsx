import './ListingDic.css';
import PropertyCard from './Listings';
import Listing_1 from '../../assets/Listing-1.jpg';
import Listing_2 from '../../assets/Listing-2.jpg';
import Listing_3 from '../../assets/Listing-3.jpg';
import Listing_4 from '../../assets/Listing-4.jpg';
import Listing_5 from '../../assets/Listing-5.jpg';
import black_arrow from '../../assets/white-arrow.png';

const ListingDic = () => {
  return (
    <div >
    <div className='listings '>
        <PropertyCard 
        image={Listing_1} 
        // price="$500,000" 
        location="Sinhgad Road,Khadakwasla" 
      />
      <PropertyCard 
        image={Listing_4} 
        // price="$750,000" 
        location="Annabhau Sathe Square,Kothrud" 
      />
       <PropertyCard 
        image={Listing_3}
        // price="$750,000" 
        location="Wakad,Pheonix Mall" 
      />
       <PropertyCard 
        image={Listing_5} 
        // price="$750,000" 
        location="Magarpatta,Hadapsar" 
      />
       <PropertyCard 
        image={Listing_2}
        // price="$750,000" 
        location="VeerBhadra Nagar,Baner" 
      />
      
    </div>
    <div className="button-container">
    <button className='btn darkbtn'>See More Properties<img src={black_arrow}/></button>
    </div>
    </div>

      
        
  )
}

export default ListingDic
