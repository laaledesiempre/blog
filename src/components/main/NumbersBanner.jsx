import "../../styles/components/numbersBanner.css"
import { useEffect,useState } from "react";

export const NumbersBanner = () => {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension(){
      return {
            width: window.innerWidth,
            height: window.innerHeight
      }
    }

    useEffect(() => {
          const updateDimension = () => {
                setScreenSize(getCurrentDimension())
          }
          window.addEventListener('resize', updateDimension);
      
          return(() => {
              window.removeEventListener('resize', updateDimension);
          })
        
    }, [screenSize])
    useEffect(()=>{
      let numbersWrapper=document.querySelectorAll(".number-animation")
      numbersWrapper.forEach((e)=>{e.style.animation="infinite-horizontal-scroll "+ viewport_w/100 +"s infinite linear"})
    },[screenSize])
    let numbers=""
    for (let i = 0; i<100; i++){
        numbers+=" 100 1 11"
    }

    let viewport_w=screenSize.width
    

  return (
    <>
    <div className="number-animation">{numbers}</div>
    </>
  )
}
