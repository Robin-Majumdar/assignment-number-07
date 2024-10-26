import footerImage from '../../assets/bg-shadow.png'
import logo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-[#06091A]'>
            <div className='container mx-auto relative'>
                <div className=' bg-white'>
                    <img style={{ height: '300px', width: '100%' }} src={footerImage} alt="Footer Image" />
                </div>
                <div className="newsletter content absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Get the latest updates and news right in your inbox!</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center m-4">
                <img src={logo} alt="" />
            </div>

            <div className="footer-content text-white">
                <div className="about-us">
                    <h3>About Us</h3>
                    <p>We are a passionate team dedicated to providing <br /> the best services to our customers.</p>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="subscribe">
                    <h3>Subscribe</h3>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Your Company All Rights Reserved.</p>
            </div>

        </div>
    );
};

export default Footer;