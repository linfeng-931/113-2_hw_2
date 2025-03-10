function Footer(){
    return(
        <footer className="footer-section">
            <div className="container">
                <div className="footer-widget-01">
                <div className="footer-logo">
                    <a href="../index.html"><img src="image/logo1.svg" alt="logo" /></a>
                </div>
                <hr />
                <div className="footer-text">
                    <p>
                    Through education, advocacy, and hands-on conservation efforts, we
                    aim to safeguard ocean biodiversity, reduce pollution, and promote
                    sustainable practices.
                    </p>
                </div>
                </div>
                <div className="footer-widget">
                <div className="footer-widget-title">
                    <h3>Useful Links</h3>
                </div>
                <ul className="inline-grid ul-container">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Latest News</a></li>
                </ul>
                </div>
                <div className="footer-widget">
                <div className="footer-widget-title">
                    <h3>Follow Us</h3>
                </div>
                <div className="footer-text">
                    <p>
                    Follow our social media pages to stay updated with the latest
                    marine ecology information.
                    </p>
                </div>
                <div className="social-logos inline-flex social-media">
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-facebook-box-fill"></i></a>
                    <a href="#"><i className="ri-youtube-fill"></i></a>
                </div>
                </div>
            </div>
            </footer>
    )
}
export default Footer;