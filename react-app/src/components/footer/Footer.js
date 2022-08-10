import { NavLink } from "react-router-dom"
import "./footer.css"


function Footer() {

    return (
        <footer>
            <div href="" className="nav-logo">
                <NavLink id='logo-nav' className={'navlink'} to='/' exact={true} activeClassName='active'>
                    <img id='logo-name' src='https://fontmeme.com/permalink/220807/153dadc40525f2d04b2f2c4dc5482603.png' />
                    <img id='logo' src='https://i.imgur.com/6m7nnpA.png' />

                </NavLink>
            </div>
            <div className="pre-footer">

                <ul className="about-us">
                    <div className="title">
                        About Us --- you need to set up these links
                    </div>
                    <a href="https://www.linkedin.com/in/ethan-browning-42a032118/">Linkedin</a>
                    <a href="https://github.com/eebrowning">Github</a>
                    {/* <p>Portfolio?</p> */}

                </ul>

                <ul className="hosting">
                    <div className="title">
                        Technologies Used
                    </div>
                    <p >SQLAlchemy</p>
                    <p >Flask</p>
                    <p >React</p>
                    <p>Python</p>

                </ul>
                <div className="tagline">
                    <h2>Pipcamp is the most comprehensive resource for the nuclear world.</h2>
                    <p>
                        Discover and book decrepit buildings, science facilities, fortresses, and baseball field-cities.
                    </p>
                </div>
            </div>

            <span className="stores">
                <div className="title">
                    Download the Pipcamp App
                </div>
                <a href="https://github.com/eebrowning/PipCamp-Capstone">


                    <div className="github-download">
                        <div id='github-button'>
                            <img id='github-logo' src='https://i.imgur.com/f2r1sEw.png' />
                            <div id='text-box'>

                                <div className="github-text-1">Download on</div>
                                <div className="github-text-2">GitHub</div>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="google"></div>
                <div className="language"></div>

            </span>

            <span className="copyright">
                <div>2022 Pipcamp inc.</div>
                <div>Please Share</div>
                <div>And consider me for a position!</div>
            </span>

        </footer>
    )
}
export default Footer
