import React from 'react'
import { imagess } from './Data';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';

const Main = () => {
    const [currentImg, setcurrentImg]= React.useState(1)
    
let leftClick =()=>{
  setcurrentImg(currentImg -1)
  if (currentImg===0) {
    setcurrentImg(1)
  }
}
let rightClick =()=>{
  setcurrentImg(currentImg +1)
  if (currentImg===2){
    setcurrentImg(1)
  }
}


  return (
    <div className='carousel'>
        <div className='carousel-Inner' style={{backgroundImage: `url(${imagess[currentImg].img})`}}>
            
            
            {/* <img src={imagess[2].img} alt="" />
            <img src={imagess[currentImg].img} alt="" /> */}
        
        <div className='left'>
            <FaChevronCircleLeft onClick={leftClick} size={50}/>
            </div>

            <div className='center'>
              <h2>{imagess[currentImg].title}</h2>
            </div>

          <div className='right'>
        <FaChevronCircleRight onClick={rightClick} size={50}/>
        </div>
         </div> 
         </div>  
            
        
  
  )
}

export default Main