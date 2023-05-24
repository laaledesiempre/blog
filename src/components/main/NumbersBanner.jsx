import "../../syles/components/numbersBanner.css"

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

    let numbers=""
    for (let i = 0; i<100; i++){
        numbers+=" 100 1 11"
    }

    let viewport_w=screenSize.width
    div.style.animation="infinite-horizontal-scroll "+ viewport_w/100 +"s infinite linear"

  return (
    <div className="number-animation">{numbers}</div>
  )
}
