import React, { useState } from 'react';
import './Design.css';
import CardWomen from './Women/CardWomen';
import CardMen from './Men/CardMen';
import CardKid from './Kid/CardKid';
import { useNavigate } from 'react-router-dom';

 const Mainform = ()=> {
  const [selectedValue, setSelectedValue] = useState('');

  const contactInfo = () => {
    alert("If you have any questions, concerns, or need further assistance, please feel free to reach out to our customer service team. You can contact us via email at @clothingmanagementsystem@gmail.com or by phone at 09056259703/09757716366. Our dedicated team will be happy to assisst you.");
    
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const navigate = useNavigate();
  const addProduct = () =>{
    navigate('/createproduct');
  }
  return (
    <header className="header">
      <center>
        <h2
          style={{
            backgroundColor: "lightblue",
            width: '100%',
            color: 'black',
            fontFamily: 'sans-serif',
            fontSize: '40px'
          }}>
          <div>CLOTHING MANAGEMENT SYSTEM</div>
        </h2>
      </center>
      <nav>
        <div className='categories'>
          <select value={selectedValue} onChange={handleChange}>
            <option value="">CATEGORIES</option>
            <option value="option1">-WOMEN'S</option>
            <option value="option2">-MEN'S</option>
            <option value="option3">-KID'S</option>
          </select>
          <button onClick={addProduct}>ADD CLOTHING</button>
          <button onClick={contactInfo}>CONTACTS</button>
          <button>ABOUT</button>
          
        </div>
      </nav>
      {selectedValue === "option1" && <CardWomen />}
      {selectedValue === "option2" && <CardMen />}
      {selectedValue === "option3" && <CardKid />}
    </header>
  );
}

export default Mainform;