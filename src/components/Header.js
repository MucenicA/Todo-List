import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

const Header = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <>
      <div className="global-alert">
        <div></div>
        <p className="global-alert__text">
          <strong>Pick up today.</strong> Curbside Pickup—it's safe, easy and
          free.<Link to="/">Learn More</Link>
        </p>
        <div className="global-alert__country">
          <img
            className="global-alert__flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png"
            alt="..."
          />
          <p className="global-alert__text">Romania</p>
        </div>
      </div>
      <header className="global-header">
        <div className="global-header-wrapper">
          <section className="global-header__logo">
            <Link className="logo-text" to="/">
              Nordstrom
            </Link>
          </section>
          <nav className="global-header__menu global-header__menu--lg">
            <ul className="global-header__list">
              <li className="global-header__item">
                <a
                  className="global-header__link global-heaLinker__link--red"
                  to="/"
              Link>
                  Sale
                </a>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Women
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Men
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Kids
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Young Adult
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Activewear
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Home
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Gifts
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Beauty
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Designer
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Brands
                </Link>
              </li>
            </ul>
          </nav>
          <section className="global-header__extras">
            <ul className="global-header__list">
              <li className="global-header__item">
                <Link className="global-header__link" to="/">
                  Search
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/login">
                  Login
                </Link>
              </li>
              <li className="global-header__item">
                <Link className="global-header__link" to="/cart">
                  Bag ({cart.length})
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <nav className="global-header__menu global-header__menu--md">
          <ul className="global-header__list">
            <li className="global-header__item">
              <a
                className="global-header__link global-hLinkader__link--red"
                to="/"
            Link>
                Sale
              </a>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Women
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Men
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Kids
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Young Adult
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Activewear
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Home
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Gifts
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Beauty
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Designer
              </Link>
            </li>
            <li className="global-header__item">
              <Link className="global-header__link" to="/">
                Brands
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
