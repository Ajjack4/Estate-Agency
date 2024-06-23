import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useRef } from 'react';
const Testimonials = () => {
  const slider=useRef();
  let tx=0;
  const slideForward =() => {
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  };
  const slideBackward =() => {
    if(tx<0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
      
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_1} alt='' className='user-img'/>
                        <div className='user-name'>
                            <h3>Anjali Patil</h3>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                    <p>Working with Shree Swami Samartha Properties was a fantastic experience. Their team is professional, knowledgeable, and truly cares about finding the perfect property for their clients. I highly recommend their services to anyone looking to buy or sell a home.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_2} alt='' className='user-img'/>
                        <div className='user-name'>
                            <h3>Vivek Sharma</h3>
                            <span>Financial Analyst</span>
                        </div>
                    </div>
                    
                    <p>Shree Swami Samartha Properties helped us find our dream home. They were patient, listened to our needs, and provided valuable insights. We couldn`t have asked for a better real estate agency.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_4} alt='' className='user-img'/>
                        <div className='user-name'>
                            <h3>Suresh Mehta</h3>
                            <span>Business Consultant</span>
                        </div>
                    </div>
                    <p>I highly recommend Shree Swami Samartha Properties to anyone looking for a reliable and trustworthy real estate partner. Their professionalism and dedication to their clients are evident in every interaction. They made the entire process of finding and purchasing a property seamless.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_3} alt='' className='user-img'/>
                        <div className='user-name'>
                            <h3>Neha Joshi</h3>
                            <span>Project Manager</span>
                        </div>
                    </div>
                    <p>Working with Shree Swami Samartha Properties was a fantastic experience. Their team is professional, knowledgeable, and truly cares about finding the perfect property for their clients. I highly recommend their services to anyone looking to buy or sell a home.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
