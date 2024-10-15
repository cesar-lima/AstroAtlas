import '../styles/planets.scss'

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { Loader } from '../components/Loader';
import { Previous } from '../components/previous-page-btn';

import PlanetsData from '../data/PlanetsData.json';

//utilizando tsignore para evitar avisos do ts sobre os imports. As imagens são utilizadas atraves do arquivo PlanetsData.json
// @ts-ignore
import mercury from '../public/mercury.svg';
// @ts-ignore
import venus from '../public/venus.svg';
// @ts-ignore
import earth from '../public/earth.svg';
// @ts-ignore
import mars from '../public/mars.svg';
// @ts-ignore
import jupiter from '../public/jupiter.svg';
// @ts-ignore
import saturn from '../public/saturn.svg';
// @ts-ignore
import uranus from '../public/uranus.svg';
// @ts-ignore
import neptune from '../public/neptune.svg';

export function Planets() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Estado para armazenar o índice atual do planeta
  const [currentIndex, setCurrentIndex] = useState(0);

  // Captura o planeta atual com base no índice
  const currentPlanet = PlanetsData.planets[currentIndex];

  const handleNextPlanet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PlanetsData.planets.length);
  };

  const handlePreviousPlanet = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % PlanetsData.planets.length);
    if (currentIndex === 0) {
      setCurrentIndex(PlanetsData.planets.length - 1);
    }
  };

  return (
    <>
      {loading && <Loader />}

      <div className="planets-container">
        <Previous />

        <main>
          <div className="change-planet-button">
            <button onClick={handlePreviousPlanet}>
              <ArrowLeft size={28} color="#ffffff" weight="thin" />
            </button>
          </div>

          <section>
            <header className="planet-name">
              {currentPlanet.name}
            </header>

            <article className="planet-infos">
              {currentPlanet.description}
            </article>

            <div className="planet-image">
              <img src={currentPlanet.image} alt="planet image" />
            </div>
          </section>

          <div className="change-planet-button">
            <button onClick={handleNextPlanet}>
              <ArrowRight size={28} color="#ffffff" weight="thin" />
            </button>
          </div>
        </main>
      </div>
    </>
  )
}