import React from 'react'
import './sites.css';
import chemicalGuys from '../img/project/chemical.png';
import hardstone from '../img/project/hardstone.png';
import topcar from '../img/project/topcar.png';
import yourquality from '../img/project/quality.png';


const Sites = () => {
  return (
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="https://www.chemicalguys.eu/en/">
                        <img src={chemicalGuys} alt="ChemicalGuys.eu" className="project__img"/>
                        <h3 className="project__title">ChemicalGuys.eu - Auto detailing (Netherlands)</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="https://hardstone.com.ua/">
                        <img src={hardstone} alt="Hardstone.ua" className="project__img"/>
                        <h3 className="project__title">Hardstone - сlothing store</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="http://topcar.lu">
                        <img src={topcar} alt="TopCar.lu" className="project__img"/>
                        <h3 className="project__title">Topcar.lu - Auto detailing (Luxembourg)</h3>
                    </a>
                </li>

                <li className="project">
                    <a href="https://yourquality.de/">
                        <img src={yourquality} alt="yourquality.de" className="project__img"/>
                        <h3 className="project__title">Yourquality.de - Leather goods shop (Germany)</h3>
                    </a>
                </li>

            </ul>
        </div>
    </main>
  )
}

export default Sites