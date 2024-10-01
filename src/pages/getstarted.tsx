import '../styles/getstarted.scss'

import logo from '../assets/logo-astroatlas.svg'
import { ArrowSquareOut } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Getstarted() {
    return (
        <div className="container-getstarted">
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo astro atlas" />
                </div>

                <div>
                    <img src="" alt="" />
                </div>
            </nav>

            <header>
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
            </footer>
        </div>
    )
}

export default Getstarted