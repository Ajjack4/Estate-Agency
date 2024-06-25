import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon}></img></h3>
        <p>Ready to find your dream home or sell your property? Contact us today to book an appointment and let our expert team guide you through every step of the process.</p>
        <ul>
            <li><img src={mail_icon}/>shreeswamisamartha@gmail.com</li>
            <li><img src={phone_icon}/>+91 99606 56596</li>
            <li><img src={location_icon}/>Shree Swami Samartha Properties, Capital city Nighoje Chakan, Pune, Maharashtra 410501.</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form >
            <label>Your Name</label>
            <input type="text" name="name " placeholder='Enter Your Name' required/>
            <label>Your Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter Your Phone Number' required/>
            <label>Write Your Message</label>
            <textarea name="message" placeholder='Write Your Message' rows='6' required></textarea>
            <button type='submit' className='btn darkbtn'>Submit Now <img src={white_arrow}/></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
