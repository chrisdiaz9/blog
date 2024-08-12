import React from "react";
import "./Footer.css";
import { ReactComponent as Twitter } from "./assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="twitter-link">
          <p>
            <a
              href="https://x.com/chris_dia_z"
              className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 rounded-lg pl-7 pr-3 py-2.5"
            >
              <Twitter className="absolute w-5 h-5 ml-1 mt-0.5"/>
              Follow me!
            </a>
          </p>
        </div>
        <div>
          <p>Christopher Diaz @2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
