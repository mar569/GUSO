import { Suspense, lazy } from 'react';
import LoadingSpinner from '../Fps/LoadingSpinner/LoadingSpinner';
import BarPage from './BarPage';

const AlcoAbout = lazy(() => import("./alcoholSlide/AlcoAbout"));
const Cocktails = lazy(() => import("./Cocktails"));
const CoffeeAbout = lazy(() => import("./coffeSlide/CoffeeAbout"));
const Day = lazy(() => import("./Day"));
const Delicious = lazy(() => import("./Delicious"));
const Food = lazy(() => import("./Food"));
const CoktailsAbout = lazy(() => import("./gosuCoktails/CoktailsAbout"));
const MapLocation = lazy(() => import("./mapLocation/MapLocation"));
const MenuBar = lazy(() => import("./MenuBar"));

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
