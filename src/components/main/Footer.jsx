import React from 'react'
import "../../styles/components/footer.css"
export const Footer = () => {
  return (
    <>
      <footer>
 {/*       <div className="footer-background">
          <div class="hidder"></div>
          <div class="background">
              <div class="num-el an">
                <img class="" src="https://github.com/laaledesiempre/blog/blob/main/src/images/1.png?raw=true"/>
                <img class="" src="https://github.com/laaledesiempre/blog/blob/main/src/images/1.png?raw=true"/>
              </div>
          </div> 
        </div>*/}
        <div className="footer-wrapper">
          <h4 className="footer-thanks">Thanks for reading!</h4>
          <p className="footer-text">site created by @laaledesiempre</p>
          <li className="media-wrapper">
            <ul className="media-account">example</ul>
          </li>
        </div>
      </footer>
    </>
  )
}
