
import './Agents.css';
import agent_1 from '../../assets/Agent-1.jpg'
import agent_2 from '../../assets/Agent-2.jpg'
import agent_3 from '../../assets/Agent-3.jpg'
import program_icon_1 from '../../assets/support.png';
import program_icon_2 from '../../assets/ceo.png';
import program_icon_3 from '../../assets/co-founder.png';
const Agents = () => {
  return (
    <div className='agents'>
      <div className='agent'>
        <img src={agent_1} alt=''/>
        <div className='caption'>
            <img src={program_icon_1}/>
            <h1>Senior Partner</h1>
            <p>Harpreet Singh</p>

        </div>
      </div>
      <div className='agent'>
        <img src={agent_2} alt=''/>
        <div className='caption'>
            <img src={program_icon_2}/>
            <h1>CEO</h1>
            <p>Dhruv Jain</p>

        </div>
      </div>
      <div className='agent'>
        <img src={agent_3} alt=''/>
        <div className='caption'>
            <img src={program_icon_3}/>
            <h1>Managing Partner</h1>
            <p>Ansh Agarwal</p>

        </div>
      </div> 
    </div>
  )
}

export default Agents

