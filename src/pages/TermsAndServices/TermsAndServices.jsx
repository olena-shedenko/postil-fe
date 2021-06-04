/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './TermsAndServices.scss';
import { useDisclosureState, Disclosure, DisclosureContent } from 'reakit';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const TermsAndServices = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 630px)' });
  const disclosure1 = useDisclosureState({ visible: false });
  const disclosure2 = useDisclosureState({ visible: false });
  const disclosure3 = useDisclosureState({ visible: false });
  const disclosure4 = useDisclosureState({ visible: false });
  const disclosure5 = useDisclosureState({ visible: false });
  const disclosure6 = useDisclosureState({ visible: false });
  const disclosure7 = useDisclosureState({ visible: false });
  const disclosure8 = useDisclosureState({ visible: false });
  const disclosure9 = useDisclosureState({ visible: false });
  const disclosure10 = useDisclosureState({ visible: false });
  const disclosure11 = useDisclosureState({ visible: false });
  const disclosure12 = useDisclosureState({ visible: false });
  const disclosure13 = useDisclosureState({ visible: false });
  return (
    <div className="ts-container">
      <Breadcrumbs className="breadcrumbs" />
      <div className="terms-container terms">
        {isDesktop && (
          <aside className="terms-aside">
            <h3 className="terms-aside__header">TERMS OF SERVICE</h3>
            <ul className="terms-aside__list aside-list">
              <li className="aside-list__item">ORDER ISSUES</li>
              <li className="aside-list__item">DELIVERY</li>
              <li className="aside-list__item">RETURNS & REFUNDS</li>
              <li className="aside-list__item">PAYMENT</li>
              <li className="aside-list__item">LEGAL POLICIES</li>
            </ul>
          </aside>
        )}
        <section className="terms-main">
          <div className="terms-main-section section">
            <h4 className="section__header">ORDER ISSUES</h4>
            <div className="section-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure
                  {...disclosure1}
                  className="disclosure__btn"
                  data-testid="button"
                />
                <h4 className="disclosure-header__header">DUTIES & TAXES</h4>
              </div>

              <DisclosureContent
                {...disclosure1}
                className="disclosure__content content"
              >
                <ul className="content-list">
                  The amount of duties and taxes you need to pay for a shipment
                  are determined by several factors:
                  <li>
                    - The HS code is used to classify the product type. Customs
                    authorities use this commodity code to quickly understand
                    what is being shipped and to apply relevant taxes, duties
                    and any regulations.
                  </li>
                  <li>
                    - The value of the goods, including freight and insurance
                    fees, help customs to determine the duties and taxes and to
                    clear your shipment. That&#39;s why it&#39;s essential to
                    state the correct value on the commercial invoice.
                  </li>
                  <li>
                    - The goods description on the commercial invoice, including
                    the product&#39;s end-use and country of manufacture. To
                    make sure the goods are classified correctly, the HS code
                    and goods description should match..
                  </li>
                </ul>
              </DisclosureContent>
            </div>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure2} className="disclosure__btn" />
                <h4 className="disclosure-header__header">ORDER TRACKING</h4>
              </div>

              <DisclosureContent
                {...disclosure2}
                className="disclosure__content"
              >
                <p>
                  After placing an order, you will receive an email containing
                  all the details. We may also be in touch if we need further
                  information to verify your payment. Once your order is
                  confirmed, it will be dispatched within 2 business days.
                </p>
                <p>
                  Depending on your location and chosen shipping method,
                  delivery takes 2-7 business days after it&#39;s dispatched. We
                  will keep you updated with tracking information and an
                  estimated delivery date. You can also follow its journey by
                  heading to ‘My Orders’ in your account, or if you opted for
                  guest checkout, you can track the status of your order here.
                </p>
              </DisclosureContent>
            </div>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure3} className="disclosure__btn" />
                <h4 className="disclosure-header__header">SAME DAY DELIVERY</h4>
              </div>

              <DisclosureContent
                {...disclosure3}
                className="disclosure__content"
              >
                <ul>
                  After placing an order, you will receive an email containing
                  all the details. We may also be in touch if we need further
                  information to verify your payment. Once your order is
                  confirmed, it will be dispatched within 2 business days.
                  <li>
                    - If you place your order between the opening time and up to
                    1 hour before the closing time of your selected store(s), it
                    will be ready for you to collect within 1 hour on the same
                    day.
                  </li>
                  <li>
                    - If you place your order later than 1 hour before the
                    closing time and before the next day’s opening time of your
                    selected store(s), it will be ready for you to collect
                    within 1 hour of the store opening.
                  </li>
                  <li>
                    - You will need to bring confirmation of order with you when
                    you come to collect the product.
                  </li>
                  <li>
                    - Your order may not be accepted if we are unable to obtain
                    authorisation for payment, or you have insufficient credit
                    on your Next Credit account, or you appear to be ineligible
                    to order the item in question, or we have identified a
                    pricing or description error for the product or due to
                    circumstances beyond our control.
                  </li>
                  <li>
                    - You may be contacted as part of our prevention of fraud
                    process, your order will be cancelled if you do not make
                    contact by the time stated.
                  </li>
                </ul>
              </DisclosureContent>
            </div>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure4} className="disclosure__btn" />
                <h4 className="disclosure-header__header">
                  Can I change my delivery address once I’ve placed my order?
                </h4>
              </div>

              <DisclosureContent
                {...disclosure4}
                className="disclosure__content"
              >
                <p>
                  After placing an order, you can update your shipping address
                  at anytime prior to the actual shipment of your order. It is
                  not allowed to update your shipping address once your order
                  has shipped. You can update your shipping address directly
                  from your account home page. Once your order ships, the system
                  will not allow you to update your shipping address.
                </p>
              </DisclosureContent>
            </div>
          </div>
          <div className="terms-main-section section">
            <h4 className="section__header section__header--simple">
              DELIVERY
            </h4>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure5} className="disclosure__btn" />
                <h4 className="disclosure-header__header">CANCELLATIONS</h4>
              </div>

              <DisclosureContent
                {...disclosure5}
                className="disclosure__content"
              >
                <p>
                  Under Consumer Regulations you have the right to cancel your
                  order as long as you do so no later than 14 days after the day
                  on which you receive the goods or service.
                </p>
                <p>
                  You must inform us of your wish to cancel in writing either by
                  letter, email or by using the cancellation form on the website
                  or call +38 093 875 9925 within a period of 14 days beginning
                  on the day after the day you receive your goods.
                </p>
                <p>
                  You must take reasonable care of the goods and not use them.
                  You should return goods to us in their original packaging,
                  wherever possible, within 14 days of informing us of your wish
                  to cancel.
                </p>
                <p>
                  If you return goods to us, we will not be responsible for any
                  loss or damage to them during transit and we recommend that
                  you use a recorded or secure delivery method. If goods are
                  lost or damaged in transit, we may charge you, or not refund
                  to you, amounts that are attributable to the loss or damage.
                </p>
              </DisclosureContent>
            </div>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure6} className="disclosure__btn" />
                <h4 className="disclosure-header__header">PREORDERS</h4>
              </div>

              <DisclosureContent
                {...disclosure6}
                className="disclosure__content"
              >
                <ul>
                  <li>
                    - You can easily pre-order items, allowing you to order
                    not-yet-released items in advance.
                  </li>
                  <li>
                    - When you pre-order a not-yet-released item on Amazon, you
                    will not be charged immediately — instead, the card on file
                    will be charged a few days before the item is released,
                    typically when it ships or a few days prior to its shipping,
                    depending on the item.
                  </li>
                  <li>
                    - The process to pre-order looks extremely similar to
                    placing a regular order. Additionally, you may receive email
                    updates if the release date changes — and if this happens,
                    you&#39;ll have the option to manage or cancel your order.
                  </li>
                  <li>
                    - A pre-ordered item will ship either when it&#39;s released
                    or just in advance of its release, and your card will
                    typically not be charged until the item has shipped or a few
                    days beforehand.
                  </li>
                  <li>
                    - The checkout process looks the same as a regular order,
                    and you&#39;ll receive email updates and can check your
                    order&#39;s progress at any time.
                  </li>
                </ul>
              </DisclosureContent>
            </div>
          </div>
          <div className="terms-main-section section">
            <h4 className="section__header section__header--simple">
              RETURNS & REFUNDS
            </h4>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure7} className="disclosure__btn" />
                <h4 className="disclosure-header__header">
                  Returning to a Store
                </h4>
              </div>

              <DisclosureContent
                {...disclosure7}
                className="disclosure__content"
              >
                <p>
                  You may return most items in a new and unused condition and
                  wherever possible in the original packaging. If you want to
                  cancel/return your order you must tell us within 14 days
                  (beginning on the day after the day you receive the goods),
                  and you then have 14 days to return the items
                </p>
                <p>
                  Certain items cannot be returned to stores, as detailed in the
                  EXCEPTIONS TO THE RETURNS POLICY section. Items bought in
                  store using a Postil&#39; Directory Card cannot be returned
                  via the Courier and must be returned to a store
                </p>
              </DisclosureContent>
            </div>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure8} className="disclosure__btn" />
                <h4 className="disclosure-header__header">
                  Returns Via Courier
                </h4>
              </div>

              <DisclosureContent
                {...disclosure8}
                className="disclosure__content"
              >
                <p>
                  You may return most items in a new and unused condition and
                  wherever possible in the original packaging. If you want to
                  cancel/return your order you must tell us within 14 days
                  (beginning on the day after the day you receive the goods),
                  and you then have 14 days to return the items.
                </p>
                <p>
                  Most returns collected by Next from your home are charged at
                  $10 per collection. This charge is applied per collection even
                  if you return multiple orders via one courier collection.
                </p>
                <p>
                  If you paid for the order by credit/debit card or PayPal, any
                  charges will be deducted from your refund. If you paid for the
                  order using your Postil&#39; credit account, this charge will
                  be applied to your account on receipt of the return. If you
                  return the whole order the £3.99 delivery charge will be
                  refunded. Items bought in store using a Next credit account
                  cannot be returned via a courier and must be returned to a
                  store.
                </p>
              </DisclosureContent>
            </div>

            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure9} className="disclosure__btn" />
                <h4 className="disclosure-header__header">Returns by Post</h4>
              </div>

              <DisclosureContent
                {...disclosure9}
                className="disclosure__content"
              >
                <p>
                  To return by post call +38 093 875 9938 to request a returns
                  label, then take to your nearest Post Office.
                </p>
              </DisclosureContent>
            </div>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure10} className="disclosure__btn" />
                <h4 className="disclosure-header__header">
                  Exceptions to the Returns Policy
                </h4>
              </div>

              <DisclosureContent
                {...disclosure10}
                className="disclosure__content"
              >
                <ul>
                  The following exceptions apply to our returns policy
                  <li>
                    - Where a product has a security sticker warning that the
                    product cannot be returned once the sticker is removed, a
                    refund or exchange will not be given if the seal is broken
                    except in accordance with your legal rights.
                  </li>
                  <li>
                    - Gift cards/ eGiftcards/vouchers cannot be returned or
                    exchanged for cash.
                  </li>
                  <li>
                    - Returned items which are not in new or unused condition
                    may not be fully credited to your account unless they are
                    faulty. This does not affect your right to return faulty
                    items.
                  </li>
                </ul>
              </DisclosureContent>
            </div>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure11} className="disclosure__btn" />
                <h4 className="disclosure-header__header">FINAL SALE</h4>
              </div>

              <DisclosureContent
                {...disclosure11}
                className="disclosure__content"
              >
                <h4>Main Sale Events:</h4>
                <ol>
                  <li>All sale items are subject to availability.</li>
                  <li>Next day delivery is not available for Sale orders.</li>
                  <li>
                    Delivery of in stock items can take up to 42 days. You will
                    be advised of the estimated delivery date at the time of
                    order.
                  </li>
                  <li>
                    Delivery to Postil&#39; stores is available for sale orders
                    but delivery to DPD Precise is not available.
                  </li>
                </ol>
              </DisclosureContent>
            </div>
          </div>
          <div className="terms-main-section section">
            <h4 className="section__header section__header--simple">PAYMENT</h4>
            <p className="section__text">
              The taking of payment from you by Postil&#39; under any of the
              means set out above or in accordance with a Postil&#39; Account
              does not indicate that a contract has been formed between you and
              Postil&#39;. By placing a telephone order or by completing and
              submitting the electronic order form including your payment
              details you are making an offer to purchase goods which, if
              accepted by us, will result in a binding contract. Payment will be
              refunded to you if your offer is later refused or rejected by
              Postil&#39;.
            </p>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure12} className="disclosure__btn" />
                <h4 className="disclosure-header__header">Ways to Pay </h4>
              </div>

              <DisclosureContent
                {...disclosure12}
                className="disclosure__content"
              >
                <h4>Online:</h4>
                <ul className="disclosure__conttent content-list">
                  <li className="content-list__item">
                    - All major credit and debit cards.
                  </li>
                  <li className="content-list__item">
                    - Postil&#39; gift cards and e-vouchers
                  </li>
                  <li className="content-list__item">- Paypal</li>
                </ul>
                <h4>In-store:</h4>
                <ul className="disclosure__conttent content-list">
                  <li className="content-list__item">
                    - All major credit and debit cards (including Apple Pay and
                    Google Pay
                  </li>
                  <li className="content-list__item">
                    - Postil&#39; gift cards and e-vouchers
                  </li>
                  <li>- Cash</li>
                </ul>
                <h4>Phone:</h4>
                <ul className="disclosure__conttent content-list">
                  <li>- All major credit and debit cards</li>
                  <li>- Postil&#39; gift cards and e-vouchers</li>
                </ul>
              </DisclosureContent>
            </div>
          </div>
          <div className="terms-main-section section">
            <h4 className="section__header section__header--simple">
              LEGAL POLICIES
            </h4>
            <div className="terms-main-disclosure disclosure">
              <div className="disclosure-header">
                <Disclosure {...disclosure13} className="disclosure__btn" />
                <h4 className="disclosure-header__header">Privacy Policy</h4>
              </div>

              <DisclosureContent
                {...disclosure13}
                className="disclosure__content"
              >
                <p>
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy. This
                  Privacy Policy has been created with the help of the Privacy
                  Policy Generator.
                </p>
                <h4>Personal Data</h4>
                <ul>
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                  <li>- Email address</li>
                  <li>- First name and last name</li>
                  <li>- Phone number</li>
                  <li>- Address, State, Province, ZIP/Postal code, City</li>
                  <li>- Usage Data</li>
                </ul>
                <h4>Usage Data</h4>
                <p>
                  Usage Data is collected automatically when using the Service.
                </p>
                <p>
                  Usage Data may include information such as Your Device&#39;s
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </p>
                <p>
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </p>
                <p>
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </p>
                <h4>Security of Your Personal Data</h4>
                <p>
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
              </DisclosureContent>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndServices;
