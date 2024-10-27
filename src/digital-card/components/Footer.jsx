import "./Footer.style.css"
import facebook from "../assets/facebook.png"
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={facebook} alt="" className="footer-logo" />
        <img src={github} alt="" className="footer-logo" />
        <img src={instagram} alt="" className="footer-logo" />
        <img src={github} alt="" className="footer-logo" />
        </div>
    </div>
  )
}

export default Footer