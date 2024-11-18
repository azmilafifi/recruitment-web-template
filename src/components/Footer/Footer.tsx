import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {

  const footerSections = [
    {
      title: 'Explore',
      items: ['Homepage', 'For jobseekers', 'For clients', 'Our sectors', 'Resources', 'Contact us'],
    },
    {
      title: 'Sectors',
      items: ['Software engineering', 'DevOps', 'Cloud', 'Infrastructure', 'Testing', 'Security'],
    },
    {
      title: 'Services',
      items: ['Nav Item', 'Nav Item', 'Nav Item', 'Nav Item', 'Nav Item'],
    },
  ];

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
          {footerSections.map((section, index) => (
            <div key={index} className="col-lg-3 col-md-12 col-sm-12 mb-4">
              <h5>{section.title}</h5>
              <ul className={styles.footer_list}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
