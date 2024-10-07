import '../styles/getstarted.scss'

import logo from '../assets/logo-astroatlas.svg'
import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'
import { Loader } from '../components/Loader'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

export function Getstarted() {
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

            <div className="container-getstarted">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="logo astro atlas" />
                    </div>

                    <div>
                        <img src="" alt="" />
                    </div>
                </nav>

                <header className="getstarted-header">
                    <p>
                        Let's Explore the <span>Universe!&nbsp;</span>
                    </p>

                    <p>
                        Unveil the secrets of the planets and explore the universe.
                    </p>
                </header>

                <footer>
                    <Link to="/planets">
                        <button>
                            <div>Get Started</div>
                            <ArrowSquareOut size={24}  />
                        </button>
                    </Link>

                    <Link to="https://github.com/cesar-lima/AstroAtlas" target='blank'>
                        <button>
                            <div>See code</div>
                            <GithubLogo size={24}  />
                        </button>
                    </Link>
                </footer>
            </div>
        </>
    )
}

export default Getstarted