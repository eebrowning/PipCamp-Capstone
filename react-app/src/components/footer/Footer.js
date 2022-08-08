import "./footer.css"


function Footer() {

    return (
        <footer>
            <a href="" className="nav-logo">
                <img className="icon" height="50px" width="50px"
                    src="https://www.pinclipart.com/picdir/big/182-1829496_vault-101-citizenship-award-vault-boy-with-pip.png"
                    alt="as" />
                <label >Pipcamp</label>
            </a>
            <div className="pre-footer">

                <ul className="about-us">
                    <div className="title">
                        About Us --- you need to set up these links
                    </div>
                    <p>Linkedin?</p>
                    <p>Github?</p>
                    <p>Portfolio?</p>

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
                <div className="github-download">Make github button to project</div>
                <div className="google"></div>
                <div className="language"></div>

            </span>

            <span className="copyright">

                <a href="">2022 Pipcamp inc.</a>
                <a href="">Terms of Service</a>
                <a href="">Privacy Policy</a>
            </span>

        </footer>
    )
}
export default Footer
