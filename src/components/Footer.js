import React from "react";
import {
  LogoLight,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon
} from "../assets/js/resource";

export default function Footer() {
  return (
    <footer className="py-3">
      <div className="container">
        <div>
          <div>
            <LogoLight />
          </div>
          <ul>
            <li>
              <a href="#">
                <WhatsappIcon color="white" />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookIcon color="white" />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon color="white" />
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <small>© 2020 Unis Pizza Co. | Est. 2015</small>
      </div>
    </footer>
  );
}
