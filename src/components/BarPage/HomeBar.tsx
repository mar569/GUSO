import { Suspense, lazy } from 'react';
import LoadingSpinner from '../Fps/LoadingSpinner/LoadingSpinner';
import BarPage from './BarPage';
import Day from './Day';


const CoffeeAbout = lazy(() => import('./coffeSlide/CoffeeAbout'));
const AlcoAbout = lazy(() => import('./alcoholSlide/AlcoAbout'));
const Food = lazy(() => import('./Food'));
const Delicious = lazy(() => import('./Delicious'));
const Cocktails = lazy(() => import('./Cocktails'));
const CoktailsAbout = lazy(() => import('./gosuCoktails/CoktailsAbout'));
const MenuBar = lazy(() => import('./MenuBar'));
const MapLocation = lazy(() => import('./mapLocation/MapLocation'));

function HomeBar() {
    return (
        <>
            <BarPage />
            <Day />
            <Suspense fallback={<LoadingSpinner />}>
                <>
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
        </>
    );
}

export default HomeBar;
