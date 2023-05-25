import {Home} from "../pages/Home.jsx"
import { Header } from "./main/Header.jsx"
import {Background} from "./main/Background.jsx"
import {NumbersBanner} from "./main/NumbersBanner.jsx"
import {Footer} from "./main/Footer.jsx"

export const App = () => {
  return (
    <>
    <Background/>
    <Header/>
    <NumbersBanner/>
    <Footer/>
    </>
  )
}
