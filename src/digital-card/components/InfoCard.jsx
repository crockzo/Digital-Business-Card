import "./InfoCard.style.css"

const InfoCard = ({title, description}) => {
  return (
    <div className="info-card">
         <p className="info-title">{title}</p>
         <p className="info-description">{description}</p>
    </div>
  )
}

export default InfoCard