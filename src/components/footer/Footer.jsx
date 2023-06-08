import './style.css'
import gitHub from '../../img/gitHub.svg';
import LinkedIn from '../../img/linkedIn.svg'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="https://github.com/Artur-UA" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link"/></a></li>
                <li className="social__item"><a href="https://www.linkedin.com/in/artur-kovalskyi-912598229/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="Link"/></a></li>
            </ul>
            <div className="copyright">
                <p>© 2023 frontend-artur.site</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer