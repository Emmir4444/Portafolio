import React from 'react'
import './HabilitiesBar.css';
import reactlogo from "../../../assets/images/icons8-react-native-50(1).png"; 
import angularlogo from "../../../assets/images/icons8-angular-50.png";
import jslogo from "../../../assets/images/icons8-javascript-50.png";
import pythonlogo from "../../../assets/images/icons8-python-50.png";
import sqllogo from "../../../assets/images/icons8-sql-50.png";
const HabilitiesBar = () => {
  return (
    <div className='habilities-bar-container'>
        <h1 className='habilities-bar-title'>HABILIDADES TÉCNICAS</h1>
        <div className='habilities-icons-container'>
            <div className='habilities-icons'>
            <img src={reactlogo} alt="React Logo" className="habilities-icon" />
            <p className='icon-title'>React</p>
            </div>
            <div className='habilities-icon'>
            <img src={angularlogo} alt="React Logo" className="habilities-icon" />
            <p className='icon-title'>Angular</p>
            </div>
            <div className='habilities-icon'>
            <img src={jslogo} alt="React Logo" className="habilities-icon" />
            <p className='icon-title'>JavaScript</p>
            </div>
            <div className='habilities-icon'>
            <img src={pythonlogo} alt="React Logo" className="habilities-icon" />
            <p className='icon-title'>Python</p>
            </div>
            <div className='habilities-icon'>
            <img src={sqllogo} alt="React Logo" className="habilities-icon" />
            <p className='icon-title'>SQL</p>
            </div>
            <div className='habilities-icon'>
            <img src={reactlogo} alt="React Logo" className="habilities-icon" />
            <p className='icon-title'>React</p>
            </div>
            <div className='habilities-icon'>
            <img src={reactlogo} alt="React Logo" className="habilities-icon" />
            <p className='icon-title'>React</p>
            </div>
            </div>
      
    </div>
  )
}

export default HabilitiesBar
