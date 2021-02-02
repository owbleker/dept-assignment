import React from 'react';
import logo from '../../assets/img/DEPT-logo-white.svg';
import facebookIcon from '../../assets/img/facebook-icon.svg';
import twitterIcon from '../../assets/img/twitter-icon.svg';
import instagramIcon from '../../assets/img/instagram-icon.svg';

const Footer = (props) => {
    return (
        <footer>
            <div className="footer-background"></div>
            <div className="container">
                <div className="footer__links">
                    <div className="row">
                        <div className="col-2 hidden-sm-down">
                            <object type="image/svg+xml" data={logo} className="header__logo hidden-sm-down">DEPT logo</object>
                        </div>
                        <div className="col-9 col-6--md">
                            <div className="footer__menu" >
                                <span className="footer__menu__item">Work</span>
                                <span className="footer__menu__item">Service</span>
                                <span className="footer__menu__item">Stories</span>
                                <span className="footer__menu__item">About</span>
                                <span className="footer__menu__item">Careers</span>
                            </div>
                        </div>
                        <div className="col-3 col-4--md text-right">
                            <span className="social-icon">
                                <object type="image/svg+xml" data={facebookIcon}>Facebook</object>
                            </span>
                            <span className="social-icon">
                                <object type="image/svg+xml" data={twitterIcon}>Twitter</object>
                            </span>
                            <span className="social-icon">
                                <object type="image/svg+xml" data={instagramIcon}>Instagram</object>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer__info">
                    <div className="row">
                        <div className="col-2--md"></div>
                        <div className="col-12 col-7--md">
                            <span className="footer__info__item">
                                Chamber of Commerce: 63464101
                            </span>
                            <span className="footer__info__item">
                                VAT: NL 8552.47.502.B01
                            </span>
                            <span className="footer__info__item">
                                Terms and conditions
                            </span>
                        </div>
                        <div className="col-12 col-3--md text-right--md copyright">
                            <span>&copy; 2021 Dept Agency</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;