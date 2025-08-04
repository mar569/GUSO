import AdvantPage from "./advant/AdvantPage"
import AnimateInfo from "./AnimateInfo"
import ClubImage from "./ClubImage"
import PlayGame from "./clubCarousel/PlayGame"
import PlayStation from "./PlayStation"
import Zone from "./zone/Zone"
import Premium from "./Premium"
import Events from "./evenPage/Events"
import { Footer } from "./Footer"





function HomeAbout() {
    return (
        <>
            <div className="home-about">
                <AnimateInfo />
                <PlayGame />
                <PlayStation />
                <ClubImage />
                <AdvantPage />
                <Zone />
                <Premium />
                <Events />
                <Footer />
            </div>
        </>
    )
}

export default HomeAbout