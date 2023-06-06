import {Home} from "../pages/Home.jsx"
import { Header } from "./main/Header.jsx"
import {Background} from "./main/Background.jsx"
import {NumbersBanner} from "./main/NumbersBanner.jsx"
import {Footer} from "./main/Footer.jsx"
import { Article } from "../pages/Article.jsx"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import { Nav } from "./main/Nav.jsx"
export const App = () => {
  return (
    <BrowserRouter>
    <Background/>
    <Header/>
    <NumbersBanner/>
    <main>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/article/:id" Component={Article}/>
      <Route path="/test" Component={Nav} />
    </Routes>
    </main>

    <NumbersBanner/>

    </BrowserRouter>
  )
}
