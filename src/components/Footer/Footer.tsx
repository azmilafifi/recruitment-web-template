import React from 'react';
import styles from './Footer.module.scss';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
            <h3>Software Recruitment co.</h3>
            <div className={styles.social_icons}>
              <FaLinkedin />
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
            <h5>Explore</h5>
            <ul className={styles.footer_list}>
              <li>Homepage</li>
              <li>For jobseekers</li>
              <li>For clients</li>
              <li>Our sectors</li>
              <li>Resources</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
            <h5>Sectors</h5>
            <ul className={styles.footer_list}>
              <li>Software engineering</li>
              <li>DevOps</li>
              <li>Cloud</li>
              <li>Infrastructure</li>
              <li>Testing</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
            <h5>Services</h5>
            <ul className={styles.footer_list}>
              <li>Nav Item</li>
              <li>Nav Item</li>
              <li>Nav Item</li>
              <li>Nav Item</li>
              <li>Nav Item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
