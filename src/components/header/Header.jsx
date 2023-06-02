import './style.css'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Hi, my name is <em>Artur</em></strong><br />
                        a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>I am able to make wishes come true!</p>
                    </div>
                    <a href="#!" className="btn">Download CV</a>
                </div>
            </header>
            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, Next.js, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>MySQL</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Header