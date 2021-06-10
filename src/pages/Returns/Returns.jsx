import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import './Returns.scss';

const Returns = () => {
  return (
    <div className="returns-container returns">
      <Breadcrumbs />
      <h3 className="returns__title">Returns Information</h3>
      <p className="returns__text">
        We are sure you will be happy with your purchase, however if you do wish
        to return we accept returns on most purchases, if returned in the
        condition in which they were sold,{' '}
        <strong>
          {' '}
          within 30 days for full price products and 14 days for discounted or
          sale products{' '}
        </strong>
        (beginning on the day you receive your purchase).
      </p>
      <p className="returns__text">
        A return can only be accepted if the products are not used and returned
        to us in their original condition and packaging, please do not remove
        any tags from the products.
      </p>
      <p className="returns__text">
        Please provide proof of purchase when returning products. If you are
        unable to provide proof of purchase, an exchange or gift tender (gift
        card or e-gift card) to the value of the lowest-selling price for the
        returned products will be offered.
      </p>
      <p className="returns__text">
        Products returned with a Gift receipt can only be exchanged.
      </p>
      <p className="returns__text">
        We don&#39;t offer refunds or exchanges on Gift cards.
      </p>
      <h3 className="returns__title">Outlet Store Policy</h3>
      <p className="returns__text">
        We are sure you will be happy with your purchase, however we will accept
        exchanges on most purchases, if returned in the condition in which they
        were sold <strong>within 30 days</strong>.
      </p>
      <p className="returns__text">
        No refunds will be given on GANT outlet stock. Outlet stores will only
        accept exchanges on purchases made at our outlet stores..
      </p>
      <p className="returns__text">
        An exchange can only be accepted if the products are not used and
        returned to us in their original condition and packaging, please do not
        remove any tags from the products.
      </p>
      <p className="returns__text">
        Please provide proof of purchase when returning an item. If you are
        unable to provide proof of purchase, an exchange or gift tender (gift
        card or e-gift card) to the value of the lowest-selling price for the
        returned goods will be offered.
      </p>
      <p className="returns__text">
        This does not affect your statutory rights.
      </p>
      <h3 className="returns__title">Online Exchanges and Returns</h3>
      <h4 className="returns__title">Online Exchanges</h4>
      <p className="returns__text">
        We can only exchange items for the same style in a different colour or
        size. If you wish to exchange your item for an alternative style, please
        return it for a refund and then place a new order for the replacement
        item.
      </p>
      <h4 className="returns__title">Online Refund Time Frame</h4>
      <p className="returns__text">
        Refunds can take up to 10 working days to appear on your statement after
        the receipt of goods at our warehouse. The length of time depends solely
        on your card company’s policies. Contact your card issuer for further
        details. Please note that customers will not receive an acknowledgement
        of delivery until such time as the refund and / or exchange is
        processed; please check your proof of postage to track returned items.
      </p>
      <h3 className="returns__title">How to Return Online Order</h3>
      <p className="returns__text">
        Returning some or all of the items from your order is simple.
      </p>
      <p className="returns__text">
        All products purchased online can be returned to any of our retail
        stores. Online returns are not accepted at any our Outlets or stockists.
      </p>
      <p className="returns__text">
        For us to process your return in store, you will need to bring:
      </p>
      <ul className="returns-list">
        <li className="returns-list__item">
          Your order confirmation email (either printed or on a mobile device)
        </li>
        <li className="returns-list__item">
          The products that you wish to return
        </li>
        <li className="returns-list__item">
          The funds will be returned to your original method of payment, and you
          should receive confirmation via email soon after the transaction is
          processed. If you have any questions regarding this process, or do not
          have access to your original method of payment, please contact our
          Customer Service team before visiting the store.
        </li>
      </ul>
    </div>
  );
};

export default Returns;
