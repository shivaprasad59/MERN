import React from 'react'

function Head() {
  const Style1={
    backgroundImage:`url("https://static.vecteezy.com/system/resources/previews/002/623/464/non_2x/concept-of-shopping-online-with-smart-phone-on-blue-sky-background-vector.jpg")`,
    minHeight:'1000px'
  }
  return (
    <div style={Style1} className='img-fluid' >
        
        <div className="container-md">
          <div className="display-1 text-center d-block text-pop-up-top">AAURA</div>
        </div>
    </div>
  )
}

export default Head