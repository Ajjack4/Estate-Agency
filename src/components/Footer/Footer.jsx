import insta from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import X from '../../assets/twitter.png';
import {Link} from 'react-scroll'


import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Shree Swami Samartha Properties</h4>
          <p> Capital city Nighoje Chakan, <br />
             Pune, Maharashtra 410501</p>
          <p>Email: shreeswamisamartha@gmail.com</p>
          <p>Phone: +91 99606 56596</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
          <li ><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li ><Link to='agents' smooth={true} offset={-240} duration={500}>Team</Link></li>
            <li ><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li ><Link to='listings' smooth={true} offset={-220} duration={500}>Listing</Link></li>
            <li ><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook"><img src={insta}/><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter"><img src={Facebook}/><i className="fab fa-twitter"></i></a>
            <a href="#instagram"><img src={linkedin}/><i className="fab fa-instagram"></i></a>
            <a href="#linkedin"><img src={X}/><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Shree Swami Samartha Properties. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
