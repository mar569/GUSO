import { Suspense, lazy } from 'react';
import LoadingSpinner from '../Fps/LoadingSpinner/LoadingSpinner';
import Day from './Day';
import CoffeeAbout from './coffeSlide/CoffeeAbout';
import AlcoAbout from './alcoholSlide/AlcoAbout';
import Food from './Food';
import Delicious from './Delicious';
import Cocktails from './Cocktails';
import CoktailsAbout from './gosuCoktails/CoktailsAbout';
import MenuBar from './MenuBar';
import MapLocation from './mapLocation/MapLocation';


const BarPage = lazy(() => import("./BarPage"));


function HomeBar() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <>
                <BarPage />
                <Day />
                <CoffeeAbout />
                <AlcoAbout />
                <Food />
                <Delicious />
                <Cocktails />
                <CoktailsAbout />
                <MenuBar />
                <MapLocation />
            </>
        </Suspense>
    );
}

export default HomeBar;
