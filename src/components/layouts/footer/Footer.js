import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { BsLinkedin, BsTelephoneOutbound, BsGlobe2 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <ul>
            <li>
              <FaFacebookSquare />
              <span>Facebook</span>
            </li>
            <li>
              <GrTwitter />
              <span>Twitter</span>
            </li>
            <li>
              <FaInstagramSquare />
              <span>Instagram </span>
            </li>
            <li>
              <BsLinkedin />
              <span>LinkedIn</span>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <ul>
            <li>
              <GoLocation />
              <span>Adress: Addis Ababa</span>
            </li>
            <li>
              <BsTelephoneOutbound />
              <span>Phone:+251942269990</span>{" "}
            </li>
            <li>
              <HiOutlineMail />
              <span>Email:goitomabebe5042@gmail.com</span>
            </li>
            <li>
              <BsGlobe2 />
              <span>Website:www.meetgoitom.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
