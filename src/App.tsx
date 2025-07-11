import React, { useRef, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { About } from "./components/AboutUs/About";
import { Header } from './components/Header/Header';
import { ClipLoader } from 'react-spinners';
import Favorite from './components/Favorite';
import Home from './components/Room/Home';
import Atmosfere from './components/Atmosfere';
import Discont from './components/Discont';
import PriceHookah from './components/PriceHookah/Home';
import Contact from './components/Contact';
import Services from './components/ServicePage/Services';
import MapPlace from './components/MapPlace';

import HomeBar from './components/BarPage/HomeBar';
import Bar from './components/Bar';

const PageAbout = lazy(() => import('./components/Fps/PageAbout'));

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const favoriteRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bgI">

      <div
        style={{
          transition: 'opacity 0.3s ease',
          opacity: location.pathname === '/bar' ? 0 : 1,
          height: location.pathname === '/bar' ? 0 : 'auto',
          overflow: 'hidden'
        }}
      >
        <Header scrollToAbout={() => scrollToRef(aboutRef)} scrollToFavorite={() => scrollToRef(favoriteRef)} />
      </div>
      <Routes>
        <Route path="/" element={
          <>
            <div ref={aboutRef}><About /></div>
            <Suspense fallback={<ClipLoader color="#769e6b" size={60} />}>
              <PageAbout />
              <div ref={favoriteRef}><Favorite /></div>
              <Home />
              <Bar />
              <Atmosfere />
              <Discont />
              <PriceHookah />
              <Contact />
              <Services />
              <MapPlace />
            </Suspense>
          </>
        } />
        <Route path="/bar" element={<HomeBar />} />
      </Routes>
    </div>
  );
}

export default App;
