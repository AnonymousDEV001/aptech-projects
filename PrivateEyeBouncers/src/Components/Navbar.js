import React, { useRef, useEffect } from "react";

import { Link,useLocation } from "react-router-dom";
import NavbarCss from "./css/Navbar.module.css";
import IndexCss from "../index.module.css";

export default function Navbar() {
  const navRef = useRef(null);
  const bgShade = useRef(null);
  const menuRef = useRef(null);
  const closeRef = useRef(null);
  let location = useLocation();

  const close = () => {
    navRef.current.style.translate = "-23rem";
    navRef.current.style.transition = "1s cubic-bezier(0.42, 0, 0.03, 0.98)";

    closeRef.current.style.display = "none";

    bgShade.current.style.backgroundColor = "transparent";
    bgShade.current.style.translate = "-23rem";
    bgShade.current.style.transition = "1s cubic-bezier(0.42, 0, 0.03, 0.98)";
    // bgShade.current.style.transition = "1s";

    menuRef.current.style.translate = "46rem";
    menuRef.current.style.opacity = "1";
    menuRef.current.style.transition = "1.3s";
  };
  const open = () => {
    bgShade.current.style.backgroundColor = "transparent";
    bgShade.current.style.translate = "0rem";
    bgShade.current.style.transition = "1s cubic-bezier(0.42, 0, 0.03, 0.98)";

    menuRef.current.style.translate = "-23rem";
    menuRef.current.style.opacity = "1";
    menuRef.current.style.transition = "1.2s";

    navRef.current.style.translate = "0rem";
    navRef.current.style.transition = "1.5s cubic-bezier(0.72, -0.68, 0, 1.04)";

    closeRef.current.style.display = "inline";

    bgShade.current.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    bgShade.current.style.transition = "1s";
  };

  // const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      open();
    });
    window.removeEventListener("resize", () => {
      open();
    });
  }, []);
  return (
    <nav ref={bgShade} className={NavbarCss.navbar}>
      <div ref={navRef} className={NavbarCss.lowerNavbar}>
        <div
          className={`${IndexCss.flex} ${IndexCss.center} ${IndexCss.column} ${IndexCss.w100}`}
        >
          <div className={NavbarCss.close}>
            <span
              onClick={open}
              ref={menuRef}
              class={`${IndexCss.materialSymbolsOutlined} ${NavbarCss.menu}`}
            >
              menu
            </span>
            <span
              ref={closeRef}
              onClick={close}
              class={IndexCss.materialSymbolsOutlined}
            >
              close
            </span>
          </div>
          <div className={NavbarCss.upperNavbar}>
            <div className={NavbarCss.leftUpperNav}>
              <div className={`${IndexCss.flex} ${IndexCss.center}`}>
                <span class={IndexCss.materialSymbolsOutlined}>mail</span>
                <p>privateeyebouncers@gmail.com</p>
              </div>
              <div className={`${IndexCss.flex} ${IndexCss.center}`}>
                <span class={IndexCss.materialSymbolsOutlined}>call</span>
                <p>+92 316 5546622</p>
              </div>
            </div>
            <div className={NavbarCss.rightUpperNav}>
              <img className={NavbarCss.facebook} src="facebook.webp" />
              <img className={NavbarCss.google} src="google.webp" />
              <img className={NavbarCss.twitter} src="twitter.webp" />
            </div>
          </div>
          <div className={NavbarCss.navigation}>
            <div className={NavbarCss.navImg}>
              <img className={NavbarCss.logo} src="logo.webp" />
              <p>PRIVATE EYE BOUNCERS</p>
            </div>
            <div className={NavbarCss.navText}>
              <ul>
                <Link to={'/'}>
                  <li style={location.pathname=="/"?{color:"white"}:{}}>HOME</li>
                  </Link>
                <Link to={'/services'}>
                  <li style={location.pathname=="/services"?{color:"white"}:{}}>SERVICES</li></Link>
                
                <Link to={'/about'}>
                  <li style={location.pathname=="/about"?{color:"white"}:{}}>ABOUT US</li>
                  </Link>
                <Link to={'/contact'} preventScrollReset={false}>
                  <li style={location.pathname=="/contact"?{color:"white"}:{}}>CONTACT</li>
                  </Link>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`${IndexCss.flex} ${IndexCss.center} ${IndexCss.column} ${IndexCss.dNone}`}
        >
          <div>
            <div
              className={`${IndexCss.flex} ${IndexCss.center} ${IndexCss.white}`}
            >
              <span class={IndexCss.materialSymbolsOutlined}>mail</span>
              <p>privateeyebouncers@gmail.com</p>
            </div>
            <div
              className={`${IndexCss.flex} ${IndexCss.center} ${IndexCss.white}`}
            >
              <span class={IndexCss.materialSymbolsOutlined}>call</span>
              <p>0316 5546622</p>
            </div>
          </div>

          <div className={NavbarCss.rightUpperNav}>
            <img className={NavbarCss.facebook} src="facebook.webp" />
            <img className={NavbarCss.google} src="google.webp" />
            <img className={NavbarCss.twitter} src="twitter.webp" />
          </div>
        </div>
      </div>
    </nav>
  );
}
