import AlcoAbout from "./alcoholSlide/AlcoAbout"
import BarPage from "./BarPage"
import Cocktails from "./Cocktails"
import CoffeeAbout from "./coffeSlide/CoffeeAbout"
import Day from "./Day"
import Delicious from "./Delicious"
import Food from "./Food"
import CoktailsAbout from "./gosuCoktails/CoktailsAbout"


function HomeBar() {
    return (
        <>
            <BarPage />
            <Day />
            <CoffeeAbout />
            <AlcoAbout />
            <Food />
            <Delicious />
            <Cocktails />
            <CoktailsAbout />
        </>

    )
}

export default HomeBar