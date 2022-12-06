import LogoOnly from "./headers/compHeaderOnly/LogoOnly";
import NavOnly from "./headers/compHeaderOnly/NavOnly";


const Footer = ({ setHome, setCategories, setPremiers, setSeries, setLogin, setSignup, setUploadArticles }) => {
    return (
        <div className="footer-container">
            <LogoOnly
                setHome={setHome}
                setCategories={setCategories}
                setPremiers={setPremiers}
                setSeries={setSeries}
                setLogin={setLogin}
                setSignup={setSignup}
                setUploadArticles={setUploadArticles}
            />
            <NavOnly
                setHome={setHome}
                setCategories={setCategories}
                setPremiers={setPremiers}
                setSeries={setSeries}
                setLogin={setLogin}
                setSignup={setSignup}
                setUploadArticles={setUploadArticles}
            />
            <div className="footer footer-legal">
                <ul id="footer-legal" className="list-footer">
                    <h3>LEGAL</h3>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer footer-work">
                <ul id="footer-work" className="list-footer">
                    <h3>WORK</h3>
                    <li>Work with us</li>
                    <li>Casting</li>
                </ul>
            </div>
            <div className="footer footer-support">
                <ul id="footer-support" className="list-footer">
                    <h3>SUPPORT</h3>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer-derechos">
                <p>SuperPelis - 2023. All rights reserved</p>
            </div>
        </div>


    );
}

export default Footer;
