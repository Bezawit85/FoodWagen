import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <p className="font-roboto footer-link">Company</p>
          <p className="font-montserrat font-medium cursor-auto footer-link-detail">
            About Us
          </p>
          <p className="font-montserrat font-medium footer-link-detail-support">
          Team
          </p>
          <p className="font-montserrat font-medium footer-link-detail-support">
          Careers
          </p>
          <p className="font-montserrat font-medium footer-link-detail-support">
          Blog
          </p>
        </div>
        <div className="footer-column">
          <p className="font-roboto footer-link">Contact</p>
          <p className="font-montserrat font-medium footer-link-detail-support">
            Help & Support
          </p>
          <p className="font-montserrat font-medium footer-link-detail-support">
            Partner with us
          </p>
          <p className="font-montserrat font-medium footer-link-detail-support">
            Ride with us
          </p>

        </div>
        <div className="footer-column">
          <p className="font-roboto footer-link">Legal</p>
          <p className="font-montserrat font-medium footer-link-detail-support">
            Terms & Conditions
          </p>
          <p className="font-montserrat font-medium footer-link-detail-support">
            Refund & Cancellation
          </p>
          <p className="font-montserrat font-medium footer-link-detail-support">
            Privacy Policy
          </p>
          <p className="font-montserrat font-medium footer-link-detail-support">
            Cookie Policy
          </p>
        </div>

        <div className="footer-column">
          <p className="font-roboto footer-link">Support</p>
          <p className="font-montserrat font-medium footer-link-detail">
            FAQ
          </p>
          <p className="font-montserrat font-medium footer-link-detail">
            Privacy Policy
          </p>
          <p className="font-montserrat font-medium footer-link-detail">
            Terms of Service
          </p>
        </div>
      </div>
      <div className="font-montserrat footer-bottom">
        <p>All Rights Reserved © Your Company, 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
