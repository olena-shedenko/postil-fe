import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { Facebook, Twitter, Instagram, LogoFt } from '../Icons';

import Button from '../Button/Button';

// const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validationEmailSchema = Yup.object().shape({
  email: Yup.string().required('*Required').email('*Invalid email'),
});

const Footer = () => {
  const handleSubscribeForm = () => {};
  return (
    <footer className="footer ft">
      <section className="ft-container">
        <div className="ft-main">
          <div className="ft-main-item ft-item">
            <h3 className="ft-item__title">Shop</h3>
            <Link className="ft-item__link" to="/catalog">
              Catalog
            </Link>
            <Link className="ft-item__link" to="/payment_and_delivery">
              Payment & Delivery
            </Link>
            <Link className="ft-item__link" to="/returns">
              Returns
            </Link>
            <Link className="ft-item__link" to="/privacy_policy">
              Privacy Policy
            </Link>
            <Link className="ft-item__link" to="/terms_of_service">
              Terms of service
            </Link>
          </div>
          <div className="ft-main-item ft-item">
            <h3 className="ft-item__title">About</h3>
            <Link className="ft-item__link" to="/about_us">
              About Us
            </Link>
            <Link className="ft-item__link" to="/reviews">
              Reviews
            </Link>
            <Link className="ft-item__link" to="/blog">
              Blog
            </Link>
          </div>
          <div className="ft-main-item ft-item">
            <h3 className="ft-item__title">Contact Us</h3>
            <a className="ft-item__link" href="mailto:hello@gmail.com">
              hello@gmail.com
            </a>
            <p className="ft-item__text">
              Studio M, 4th Floor8 Lower Manchester street, M1 5QF
            </p>
            <a className="ft-item__link" href="tel:++380938759922">
              +38 093 875 9922
            </a>
          </div>
          <div className="ft-main-item ft-item">
            <h3 className="ft-item__title">Subscribe</h3>
            <p className="ft-item__subscribe">
              Subscribe now and get 15% off on your first order
            </p>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationEmailSchema}
              onSubmit={handleSubscribeForm}
            >
              {({ errors, touched }) => (
                <Form className="ft-item__subscribe-form ft-form">
                  <Field
                    name="email"
                    type="email"
                    id="email"
                    placeholder="e-mail"
                    className="ft-form__input"
                  />
                  {errors.email && touched.email ? (
                    <div className="email-error">{errors.email}</div>
                  ) : null}
                  <Button
                    type="submit"
                    className="ft-form__btn"
                    commonStyles
                    variant="dark"
                  >
                    Send
                  </Button>
                </Form>
              )}
            </Formik>

            <div className="ft-item__social ft-social">
              <h4 className="ft-social-title">Follow us</h4>
              <div className="ft-social-icons ft-icons">
                <Facebook
                  color="#373F41"
                  className="ft-icons__fb-icon ft-icons__icon"
                />
                <Twitter
                  color="#373F41"
                  className="ft-icons__tw-icon ft-icons__icon"
                />
                <Instagram
                  color="#373F41"
                  className="ft-icons__inst-icon ft-icons__icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-copyright__logo ft-logo">
            <LogoFt color="#373F41" className="ft-logo__logo" />
            <h3 className="ft-logo__text">POSTIL’</h3>
          </div>
          <div className="ft-copyright__copyright">
            © 2010 — 2020 Simple Studio
          </div>
          {/* <div className="ft-copyright__chatbot ft-chatbot">
            <Button type="button" className="ft-chatbot__btn">
              <Chatbot />
            </Button>
          </div> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
