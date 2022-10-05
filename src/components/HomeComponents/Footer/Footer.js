import React from "react";

import "./style.scss";
import footerImage from "../../../images/footer.png";

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="footer-left">
                <img src={footerImage} alt="footer" width="217px" />
                <div className="flex-column">
                    <div>
                        <h4>İletişim</h4>
                        <p>
                            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
                            Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
                        </p>
                    </div>
                    <span>Email: bilgi@tesodev.com</span>
                </div>
            </div>
            <div className="footer-right">
                <iframe
                    width="465"
                    height="220"
                    loading="lazy"
                    allowFullScreen
                    title="map-tesodev"
                    zoom="15"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNbopv3q7yhQR3tx6BelEj8k&key=AIzaSyAjZI7PaSZFptMm4ML3yo_TktQAX_8KWeo&zoom=13"
                ></iframe>
            </div>
        </div>
    );
};
export default Footer;
