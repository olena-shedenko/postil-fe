import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h3 className="contact-us__title">Contact Details</h3>
      <div className="contact-us-details details-phone">
        <h4 className="contact-us-details details-phone__title">By Phone</h4>
        <table className="details-phone__table table">
          <thead>
            <tr className="table-header">
              <th>Department</th>
              <th>Telephone Number</th>
              <th>Opening Times</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online Orders & General Enquiries</td>
              <td>+38 093 875 9924</td>
              <td>Monday - Sunday 8am to 11pm</td>
            </tr>
            <tr>
              <td>
                Selfserve Number For Payments, Return Requests and Account
                Balance Confirmation
              </td>
              <td>+38 093 875 9925</td>
              <td>7 days a week 24/7</td>
            </tr>
            <tr>
              <td>Store Enquiries</td>
              <td>+38 093 875 9922</td>
              <td>Monday - Sunday 8am to 11pm</td>
            </tr>
            <tr>
              <td>Report an issue with the Website</td>
              <td>+38 093 875 9930</td>
              <td>Monday - Sunday 8am to 11pm</td>
            </tr>
            <tr>
              <td>Financial Difficulties</td>
              <td>+38 093 875 9932</td>
              <td>Mon to Fri 8am to 9pm, Sat & Sun 9am to 5pm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="contact-us-details details-email">
        <h4 className="contact-us-details details-email__title">By Email</h4>
        <p className="details-email__text">
          You can e-mail us your query or any feedback (positive or negative) by
          using our email:
          <a className="details-email__email" href="mailto:hello@gmail.com">
            hello@gmail.com
          </a>
        </p>
      </div>
      <div className="contact-us-details details-post">
        <h4 className="contact-us-details details-post__title">By Post</h4>
        <p className="details-post__text"> Our address is:</p>
        <p className="details-post__text">
          Studio M, 4th Floor8 Lower Manchester street, M1 5QF
        </p>
        <h4>Head Office Information</h4>
        <p className="details-post__text">Postil&#39; Retail Ltd</p>
        <p className="details-post__text">Desford Road</p>
        <p className="details-post__text">Enderby</p>
        <p className="details-post__text">Leicester</p>
        <p className="details-post__text">LE19 4AT</p>
        <p className="details-post__text">Telephone : 0333 777 4577</p>
        <p className="details-post__text">
          Company Registration Number: 4521150.
        </p>
        <p className="details-post__text">
          VAT Registration Number: 179 7658 90.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
