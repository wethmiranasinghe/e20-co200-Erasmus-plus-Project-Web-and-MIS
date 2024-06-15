import peraLogo from '../assets/pera.png';

function Footer() {

    return (

        <footer className="footer"> 
            <div className="footer-card">
                <img className="pera-logo" src={peraLogo} alt="pera logo" /> 
                <p><p>University of Peradeniya</p>
                <p>ERASMUS+ CYCLE Project</p>
                <p>Project Number: GAP-101128627</p></p>
            </div>

            <div className="footer-nav">
                <nav>
                    <p>Main Navigation</p>
                    
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Log in</a></li>
                        <li><a href="#">Project Overview</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <nav>
                    <p>Links to other Projects</p>
                    <ul>
                        <li><a href="#">Link1</a></li>
                        <li><a href="#">Link2</a></li>
                        <li><a href="#">Link3</a></li>
                    </ul>
                </nav>

                <nav>
                    <p>Quick Links</p>
                    <ul>
                        <li><a href="#">Quick Link1</a></li>
                        <li><a href="#">Quick Link2</a></li>
                        <li><a href="#">Quick Link3</a></li>
                    </ul>
                </nav>
            </div>
            <p className = "footer-websiteName">&copy; {new Date().getFullYear()} ERASMUS+ CYCLE PROJECT</p>
        </footer>
    );
}

export default Footer;