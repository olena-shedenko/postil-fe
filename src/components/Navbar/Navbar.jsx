import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/svg/postil.svg";
import { ReactComponent as Arrow } from "../../images/svg/vector.svg";
import { ReactComponent as LogIn } from "../../images/svg/person.svg";
import { ReactComponent as Favourites } from "../../images/svg/heart.svg";
import { ReactComponent as Cart } from "../../images/svg/basket.svg";
import "./Navbar.scss";
import Search from "./Search";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [catalog, setCatalog] = useState(false);

  const handleCatalog = () => setCatalog(!catalog);
  const handleClick = () => setDropdown(!dropdown);
  function closeMenu() {
    setDropdown(false);
    setCatalog(false);
  }

  return (
    <div className="nav">
      <nav className="navbar">
        <Link to="/" onClick={handleClick} data-testid="logo">
          <Logo className="navbar--logo" />
        </Link>
        <div
          role="presentation"
          onClick={handleCatalog}
          className={catalog ? "dropdown--nav active" : "dropdown--nav"}
        >
          Catalog
          <Arrow className="navbar--arrow" />
          <div
            data-testid="catalog"
            className={
              catalog ? "dropdown--catalog active" : "dropdown--catalog"
            }
          >
            <div className="dropdown--catalog__item">
              <Link to="/bedroom" className="navbar--links" onClick={closeMenu}>
                Bedroom
              </Link>
            </div>
            <div className="dropdown--catalog__item">
              <Link
                to="/bed_linen"
                className="navbar--links"
                onClick={closeMenu}
              >
                Bed linen
              </Link>
            </div>
            <div className="dropdown--catalog__item">
              <Link to="/kitchen" className="navbar--links" onClick={closeMenu}>
                Kitchen
              </Link>
            </div>
            <div className="dropdown--catalog__item">
              <Link
                to="/bathroom"
                className="navbar--links"
                onClick={closeMenu}
              >
                Bathroom
              </Link>
            </div>
            <div className="dropdown--catalog__item">
              <Link
                to="/loungewear"
                className="navbar--links"
                onClick={closeMenu}
              >
                Loungewear
              </Link>
            </div>
            <div className="dropdown--catalog__item">
              <Link to="/sale" className="navbar--links" onClick={closeMenu}>
                Sale
              </Link>
            </div>
            <div className="dropdown--catalog__item">
              <Link to="/catalog" className="navbar--links" onClick={closeMenu}>
                Shop All
              </Link>
            </div>
          </div>
        </div>

        <div className={dropdown ? "navbar--menu active" : "navbar--menu"}>
          <div className="navbar--item">
            <Link to="/about_us" className="navbar--links" onClick={closeMenu}>
              About
            </Link>
          </div>
          <div className="navbar--item">
            <Link to="/contact" className="navbar--links" onClick={closeMenu}>
              Contact
            </Link>
          </div>
          <div className="navbar--item">
            <Link to="/blog" className="navbar--links" onClick={closeMenu}>
              Blog
            </Link>
          </div>
          <div className="navbar--item" data-testid="search">
            <Search />
          </div>
          <div className="navbar--item icon">
            <LogIn onClick={closeMenu} />
          </div>
          <div className="navbar--item icon">
            <Favourites onClick={closeMenu} />
          </div>
          <div className="navbar--item icon">
            <Cart onClick={closeMenu} />
          </div>
        </div>
        <div>
          En
          <Arrow className="navbar--arrow" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
