import AdvantPage from "./AdvantPage"
import AnimateInfo from "./AnimateInfo"
import ClubImage from "./ClubImage"
import PlayGame from "./PlayGame"
import PlayStation from "./PlayStation"



function HomeAbout() {
    return (
        <>
            <div className="home-about">
                <AnimateInfo />
                <PlayGame />
                <PlayStation />
                <ClubImage />
                <AdvantPage />
            </div>
        </>
    )
}

export default HomeAbout