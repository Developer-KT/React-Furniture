import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {

  useEffect(() => {
    gsap.registerPlugin(Flip); //Let gsap know that we've added this plugin to our project

    const links = document.querySelectorAll(".tab a");
    const activeNav = document.querySelector(".active-nav");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        //Turn navs blue
        gsap.to(links, { color: "black" });

        if (document.activeElement === link) {
          gsap.to(link, { color: "#385ae0" });
        }

        console.log(document.activeElement);

        //Move the line
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
          duration: 1.25,
          absolute: true,
          ease: "elastic.out(1,0.5)",
        });
      });
    });
  });

  return (
    <header id="header">
      <img src="/images/HOME.CO.svg" alt="Home.Co logo" />
      <nav>
        <ul className="nav-tabs">
          <div className="tab-div">
            <li className="tab">
              <Link to="/" id="home-btn">
                Home
              </Link>
            </li>
            <div className="active-nav"></div>
          </div>
          <div className="tab-div">
            <li className="tab">
              <Link to="/shop-all">Shop All</Link>
            </li>
          </div>
          <div className="tab-div">
            <li className="tab">
              <Link to="/specials">Specials</Link>
            </li>
          </div>
        </ul>
      </nav>
      <button className="btn" id="contact-btn">
        Contact Us
      </button>
    </header>
  );
}
