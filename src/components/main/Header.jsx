import "../../styles/components/header.css"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate= useNavigate()
  const navToHome=()=> navigate("/")

  return (
    <>
    <header className="logo-div">
      <button onClick={()=>{navToHome()}} className="home-driver"></button>
      <h1 className="title">@laaledesiempre</h1>
      <h3 className="sub-title">{"<---dev.blog--->"}</h3>
      <div className="github-container">Github</div>
      <p className="ale-name">λle</p>
    </header>
    
    </>
  )
}
