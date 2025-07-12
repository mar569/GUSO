import React, { useRef, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { About } from "./components/AboutUs/About";
import { ClipLoader } from 'react-spinners';
import PageAbout from './components/Fps/PageAbout';
import Header from './components/Header/Header';
import Favorite from './components/Favorite';
import PriceZoon from './components/PricePageZoon/PriceZoon';

const Home = lazy(() => import('./components/Room/Home'));
const Atmosfere = lazy(() => import('./components/Atmosfere'));
const Discont = lazy(() => import('./components/Discont'));
const PriceHookah = lazy(() => import('./components/PriceHookah/Home'));
const Contact = lazy(() => import('./components/Contact'));
const Services = lazy(() => import('./components/ServicePage/Services'));
const MapPlace = lazy(() => import('./components/Footer/MapPlace'));
const HomeBar = lazy(() => import('./components/BarPage/HomeBar'));
const Bar = lazy(() => import('./components/Bar'));

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const favoriteRef = useRef<HTMLDivElement | null>(null);
  const discontRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bgI">
      <div
        style={{
          transition: 'opacity 0.3s ease',
          opacity: location.pathname === '/bar' || location.pathname === '/prices' ? 0 : 1,
          height: location.pathname === '/bar' || location.pathname === '/prices' ? 0 : 'auto',
          overflow: 'hidden'
        }}
      >
        <Header
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToFavorite={() => scrollToRef(favoriteRef)}
          scrollToDiscount={() => scrollToRef(discontRef)}
        />
      </div>
      <Routes>
        <Route path="/" element={
          <>
            <div ref={aboutRef}><About /></div>
            <PageAbout />
            <div ref={favoriteRef}><Favorite /></div>
            <Suspense fallback={<ClipLoader color="#769e6b" size={60} />}>
              <Home />
              <Bar />
              <Atmosfere />
              <Discont />
              <div ref={discontRef}><PriceHookah /></div>
              <Contact />
              <Services />
              <MapPlace />
            </Suspense>
          </>
        } />
        <Route path="/bar" element={
          <Suspense fallback={<ClipLoader color="#769e6b" size={60} />}>
            <HomeBar />
          </Suspense>
        } />
        <Route path="/prices" element={
          <Suspense fallback={<ClipLoader color="#769e6b" size={60} />}>
            <PriceZoon />
          </Suspense>
        } />
      </Routes>

    </div>
  );
}

export default App;
