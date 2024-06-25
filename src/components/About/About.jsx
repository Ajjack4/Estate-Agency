import "./About.css"
import about_img from '../../assets/about.jpg';
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h2> Shree Swami Samarth Properties</h2>
        {/* <h2>Why Choose Us?</h2> */}
        <p>Shree Swami Samarth Properties Group is #1 in the Pune for transactions with over ₹100 Crore in sales. For nearly two decades Shree Swami Samartha group has been the top-producing real estate team in Pune and the greater Maharashtra region.</p>
        
        <p>With over 25 years of experience and closing ₹100 crore in sales in the Pune and Maharashtra real estate markets, the Shree Swami Samartha Real Estate Group continually rank in the top 0.5% of agents worldwide. Our team has exceptional knowledge about our community and neighborhoods, which is backed by our affiliation with Clients. Through Clients, our ability to market and showcase your property is optimized with the most innovative technologies and resources available in today’s market.</p>
      </div>
    </div>
  )
}

export default About
