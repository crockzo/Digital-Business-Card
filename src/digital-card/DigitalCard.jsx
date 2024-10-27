// components import 
import DigitalButton from "./components/DigitalButton"
import InfoCard from "./components/InfoCard"
import Footer from "./components/Footer"


// asset imports
import profile from "./assets/profile.png"
import "./DigitalCard.style.css"

export default function DigitalCard () {
    return (
        <div className="digital-card-container">
        <div className="digital-card">
        <img className="user-profile-image" src={profile}/>
        <main className="user-info-card">
            <h1 className="user-name">Lauran Smith</h1>
            <p className="user-role">Frontend Developer</p>
            <p className="user-website">Openuplearning.com</p>

            <div className="button-container">
                <DigitalButton textColor="black" title="EMAIL" bgColor="white" iconName="user"/>
                <DigitalButton textColor="white" title="LINKEDIN" bgColor="#297FE5" iconName="home"/>
            </div>

            <InfoCard title="About" description="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
            <InfoCard title="Interest" description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
            
        </main>

        <Footer/>
    </div>
    </div>
)
}