import '../styles/planets.scss'

import { useEffect, useState } from 'react';

import { Loader } from '../components/Loader';
import { Previous } from '../components/previous-page-btn';
import mars from '../assets/mars.png'

export function Planets() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div className="planets-container">
        <Previous />

        <section>
          <header className="planet-name">
            MARS
          </header>

          <article className="planet-infos">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga quia repellendus reiciendis exercitationem ullam, eveniet tempore iusto obcaecati dicta, nostrum voluptatum! Repudiandae inventore nihil, vero voluptas quod nobis at.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga quia repellendus reiciendis exercitationem ullam, eveniet tempore iusto obcaecati dicta, nostrum voluptatum! Repudiandae inventore nihil, vero voluptas quod nobis at.
          </article>

          <div className="planet-image">
            <img src={mars} alt="planet image" />
          </div>

        </section>
      </div>
    </>
  )
}