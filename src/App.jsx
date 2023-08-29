import React from 'react'

import './App.css'

function App() {
 return (
    <div className='App'>
        <div className='navbar'>
          <div>
            <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/brand_logo.png?raw=true" alt="nike logo" width="80px" height="40px" />
          </div>
          <div>
            <span>
              MENU
            </span>
            <span>LOCATION</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
<div className='content'>
  <div className='First'>
     <h1>YOUR FEET <br />
      DESERVES <br />
       THE BEST</h1>
       
       <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO <br />
     HELP YOU WITH OUR SHOESYOUR FEET DESERVE THE BEST <br />
     AND WE ARE HERETO HELPYOU WITH OUR SHOES</p>
       
    
     <button>Shop Now</button>
     <button>Category</button>
     <div className='third'>
     <h5>Also Available On</h5>
     <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/flipkart.png?raw=true" alt="flipkart" />
     <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/amazon.png?raw=true" alt="amazon" />
     </div>
     
  </div>
  <div className='second'>
    <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/hero-image.png?raw=true" alt="shoe" width="100%" height="100%" />
  </div>
  
</div>
    </div>
      
  )
}

export default App
