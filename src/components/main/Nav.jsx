import React from 'react'
/*
  <div class=navigator>
      <button class="nav" onclick="change()">.nav</button>
  <div class="Opt">
     <button class="hidden nav-el nav1">/home</button>
     <button class="hidden nav-el nav2">/blog</button>
     <button class="hidden nav-el nav3">/cv</button>

  </div>
  </div>

const change= ()=>{
  document.querySelectorAll(".nav-el").forEach(e=> {e.classList.toggle("hidden")})
}
*/ 
export const Nav = () => {

  return (
  <div className='nav-container'>
      <button className='nav-button'>.nav</button>
    <div className='options-wrapper'>
      <button className='option-element'>Home</button>
      <button className='option-element'>Articles</button>
      <button className='option-element'>Resume</button>
    </div>
  </div>
  )
}
