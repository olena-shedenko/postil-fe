import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../images/svg/postil.svg';
import { ReactComponent as Arrow } from '../../images/svg/vector.svg';
import { ReactComponent as LogIn } from '../../images/svg/person.svg';
import { ReactComponent as Favourites } from '../../images/svg/heart.svg';
import { ReactComponent as Cart } from '../../images/svg/basket.svg';
import {
  toggleBagPopup,
  toggleAccountModal,
  filterAndSortOperation,
} from '../../store/operations';

import AccountModal from '../AccountModal/AccountModal';

import { ReactComponent as Bars } from '../../images/svg/threebars.svg';
import './Navbar.scss';
import Search from './Search';
import BagPopup from '../BagPopup/BagPopup';

import {
  filterByCategory,
  clearFilteredProducts,
  clearCategory,
} from '../../store/actions';

function Navbar() {
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState(false);
  const [catalog, setCatalog] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 1024) {
      setCatalog(false);
    } else {
      setCatalog(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1024) {
      setCatalog(false);
    } else {
      setCatalog(false);
    }
  };

  const handleClick = () => setDropdown(!dropdown);
  const handleCatalog = () => setCatalog(!catalog);

  const accountModal = useSelector((state) => state.accountModal);

  function closeMenu() {
    setDropdown(false);
    setCatalog(false);
  }

  return (
    <>
      <BagPopup />
      {accountModal && <AccountModal />}
      <div className="nav">
        <nav className="navbar">
          <Bars onClick={handleClick} className="navbar--bars" />
          <Link to="/" data-testid="logo">
            <Logo className="navbar--logo" />
          </Link>
          <div
            role="presentation"
            onMouseEnter={onMouseEnter}
            onClick={handleCatalog}
            className={catalog ? 'dropdown--nav actived' : 'dropdown--nav'}
          >
            <Link to="/catalog" className="navbar--links" onClick={closeMenu}>
              Catalog
            </Link>
            <Arrow className="navbar--arrow" />
            <div
              data-testid="catalog"
              className={
                catalog ? 'dropdown--catalog actived' : 'dropdown--catalog'
              }
              onMouseLeave={onMouseLeave}
            >
              <div className="dropdown--catalog__item">
                <Link
                  to="/catalog"
                  className="navbar--links"
                  onClick={() => {
                    closeMenu();
                    dispatch(filterByCategory('bed-linen-sets'));
                    dispatch(filterAndSortOperation());
                  }}
                >
                  Bed Linen Sets
                </Link>
              </div>
              <div className="dropdown--catalog__item">
                <Link
                  to="/catalog"
                  className="navbar--links"
                  onClick={() => {
                    closeMenu();
                    dispatch(filterByCategory('duvet-covers'));
                    dispatch(filterAndSortOperation());
                  }}
                >
                  Duvet Covers
                </Link>
              </div>
              <div className="dropdown--catalog__item">
                <Link
                  to="/catalog"
                  className="navbar--links"
                  onClick={() => {
                    closeMenu();
                    dispatch(filterByCategory('flat-sheets'));
                    dispatch(filterAndSortOperation());
                  }}
                >
                  Flat Sheets
                </Link>
              </div>
              <div className="dropdown--catalog__item">
                <Link
                  to="/catalog"
                  className="navbar--links"
                  onClick={() => {
                    closeMenu();
                    dispatch(filterByCategory('pillowcases'));
                    dispatch(filterAndSortOperation());
                  }}
                >
                  Pillowcases
                </Link>
              </div>
              <div className="dropdown--catalog__item">
                <Link
                  to="/catalog"
                  className="navbar--links"
                  onClick={() => {
                    closeMenu();
                    dispatch(clearFilteredProducts());
                    dispatch(clearCategory());
                  }}
                >
                  Shop All
                </Link>
              </div>
            </div>
          </div>
          <div className={dropdown ? 'navbar--menu actived' : 'navbar--menu'}>
            <div className="navbar--item">
              <Link
                to="/about_us"
                className="navbar--links"
                onClick={closeMenu}
              >
                About
              </Link>
            </div>
            <div className="navbar--item">
              <Link
                to="/contact-us"
                className="navbar--links"
                onClick={closeMenu}
              >
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
            <div className="navbar--item navbar--item--account icon">
              <LogIn
                onClick={() => {
                  dispatch(toggleAccountModal());
                }}
              />
            </div>
            <div className="navbar--item  icon">
              <Favourites onClick={closeMenu} />
            </div>
            <div className="navbar--item icon">
              <div className="navbar--item icon">
                {/* eslint-disable-next-line */}
                <div
                  className="navbar--links"
                  onClick={() => dispatch(toggleBagPopup())}
                >
                  <Cart onClick={closeMenu} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
