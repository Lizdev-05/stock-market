import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer>
    <Container className=" footer d-flex align-items-center justify-content-between text-white position-relative b-0 mt-4">
      <div className="text-center">
        <h5>Stock Market trends</h5>
        <span>All rights reserved 2022</span>
      </div>
      <div>
        <ul className="d-flex">
          <li className="mx-2">
            <a
              href="https://github.com/Lizdev-05/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <FaGithub />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://linkedin.com/in/oyinlade-ojesanmi/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://twitter.com/ojesanmi_oyin"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default Footer;
