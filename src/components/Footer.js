import React from "react"
import SAM from "../assests/svg/SAM.svg"
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlackberry, faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTelegram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faSignal } from "@fortawesome/free-solid-svg-icons"
import Pagination from './pagination'

function Footer1({goToNextPage, goToPrevPage}) {
 
  return (
    <>
      <footer>
      <Pagination goToNextPage={goToNextPage} goToPrevPage={goToPrevPage}/>
      <hr className="line" />
        <div className="footer">
          <div>
            <span>
              <img src={SAM} className="footerLogo" />
            </span>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <div>
            I'm working on Front-End project in order to getting along with possibe dificulties we will be facing in future. <br />
            I'm so ambitious to gain more knowledge in web developing and generally programming.
          </div>
          <div className="social">
            <p>Keep In Touch With Us On Social Media :</p>
            <ul>
              <li>
                <a>
                  <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faBlackberry} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faGoogle} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faTelegram} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faSignal} style={{ fontSize: 30 }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="line1" />
        <p className="copyright">
          <span style={{ color: "crimson" }}>&#169; WELL DESIGNED .</span> ALL RIGHT RESERVED. Designed by Sattar.
        </p>
      </footer>
    </>
  )
}

export default Footer1
