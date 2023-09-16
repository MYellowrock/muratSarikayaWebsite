import logo from "../images/muratLogo.png";
import "../css/navigation.css";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

function Navigation() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    if (window.innerWidth < 768) {
      tl.fromTo("#navigation", { y: "-100%" }, { y: "0%" }, 1);
      tl.fromTo("#links", { x: "300%" }, { x: "0%" }, 1);
      tl.fromTo("#logo", { y: "-200%" }, { y: "0%" }, 1);
    } else {
      tl.fromTo("#navigation", { y: "-100%" }, { y: "0%" }, 1);
      tl.fromTo("#links", { x: "100%" }, { x: "0%" }, 1);
      tl.fromTo("#logo", { x: "-150%" }, { x: "0%" }, 1);
    }
  }, []);

  let [menu, setMenu] = useState(false);

  if (window.innerWidth > 768) {
    menu = true;
  }

  return (
    <nav
      id="navigation"
      className="z-10 fixed w-full min-h-[80px] bg-cv-light flex justify-between items-center border-solid border-cv-light border-4 rounded-2xl bg-gradient-to-b from-cv-orange to-cv-light"
    >
      <div id="logo" className="flex justify-between gap-10 items-start mx-4">
        <a href="/">
          <img src={logo} alt="muratLogo" width={100} />
        </a>
        <button
          onClick={() => setMenu(!menu)}
          id="nav-button"
          className="hidden w-full mt-4"
        >
          {<HiMenu width={32} height={32} />}
        </button>
      </div>
      {menu && (
        <div id="links">
          <ul id="list" className="flex justify-center items-center gap-8 mx-4">
            <div className="hoverable">
              <Link
                to="introduce"
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
              >
                <li className="nav-list-text font-semibold text-xl text-cv-black opacity-90 cursor-pointer hover:opacity-100">
                  Introduce
                </li>
                <div className="thin-line opacity-60 bg-cv-orange w-[15px] h-[4px]"></div>
              </Link>
            </div>
            <div className="hoverable">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
              >
                <li className="nav-list-text font-semibold text-xl text-cv-black opacity-90 cursor-pointer hover:opacity-100">
                  Projects
                </li>
                <div className="thin-line opacity-60 bg-cv-orange w-[15px] h-[4px]"></div>
              </Link>
            </div>
            <div className="hoverable">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li className="nav-list-text font-semibold text-xl text-cv-black opacity-90 cursor-pointer hover:opacity-100">
                  Contact
                </li>
                <div className="thin-line opacity-60 bg-cv-orange w-[15px] h-[4px]"></div>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
