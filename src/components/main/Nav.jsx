import "../../styles/components/nav.css"
import React from 'react'
/*
  <div className=navigator>
      <button className="nav" onclick="change()">.nav</button>
  <div className="Opt">
     <button className="hidden nav-el nav1">/home</button>
     <button className="hidden nav-el nav2">/blog</button>
     <button className="hidden nav-el nav3">/cv</button>

  </div>
  </div>
*/
const change= ()=>{
  document.querySelectorAll(".nav-el").forEach(e=> {e.classList.toggle("hidden")})
  document.querySelectorAll(".nav").forEach(e=> {e.classList.toggle("hidden")})
}
 
export const Nav = () => {

  return (
  <nav className="navigator">
       <button className="nav-button-std nav" onClick={()=>{change()}}>.nav</button>
    <div className="Opt">
       <button className="nav-button-std hidden nav-el nav1">/home</button>
       <button className="nav-button-std hidden nav-el nav2">/blog</button>
       <button className="nav-button-std hidden nav-el nav3">/cv</button>
    </div>
  </nav>
 )
}
