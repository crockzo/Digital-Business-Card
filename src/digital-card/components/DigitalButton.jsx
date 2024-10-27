import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./DigitalButton.style.css"

const DigitalButton = ({title, iconName, textColor, bgColor}) => {

    return (
    <div style={{background: bgColor, color: textColor}} className="digital-button">
        <FontAwesomeIcon className="digital-button-icon"  icon={iconName} size="xl" />
        <p className="digital-button-title">{title}</p>
    </div>)
}

export default DigitalButton