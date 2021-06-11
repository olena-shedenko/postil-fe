/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDisclosureState, Disclosure, DisclosureContent } from 'reakit';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import './PaymentDelivery.scss';

const PaymentDelivery = () => {
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
  return (
    <div className="payment-container payment">
      <Breadcrumbs />
      <h2 className="payment__main-title">Payment</h2>
      <h4 className="payment__off-title">How can I make a payment?</h4>
      <p className="payment__text">
        There are various ways you can make a payment to your account designed
        to suit you.
      </p>
      <div className="payment-disclosure disclosure disclosure--boredered">
        <div className="disclosure-header">
          <Disclosure
            {...disclosure1}
            className="disclosure__btn"
            data-testid="button"
          />
          <h4 className="disclosure-header__header">Direct Debit</h4>
        </div>

        <DisclosureContent
          {...disclosure1}
          className="disclosure__content content"
        >
          <p className="content__text">
            This will take 1 working day to be applied to your account.
          </p>
          <p className="content__text">
            We will collect the minimum payment, the full balance, or a fixed
            amount each month, as instructed by you when you set up your Direct
            Debit. We will do this regardless of any other payments in addition
            to this you may make on your account. However, if any additional
            payments by you reduce the balance of your account below the minimum
            payment required, we will take only that balance.
          </p>
          <p className="content__text">
            If you have chosen to set a fixed amount to be collected each month,
            and the balance on your account drops to less than the fixed amount
            stated, we will only take that balance.
          </p>
          <p className="content__text">
            It can take up to 21 days to set up your Direct Debit. You will
            receive confirmation in the post once the Direct Debit has been set
            up on your account. Until your Direct Debit has been set up you must
            continue to pay your minimum payment by the due date using an
            alternative method of payment.
          </p>
          <p className="content__text">
            Your Direct Debit will be set up to retrieve payment from your
            bank/building society on the same payment date as stated on your
            statement from us. Unfortunately, the Direct Debit date is unable to
            be amended. If a Direct Debit is not a suitable payment method for
            you, we would advise to set up a standing order with your
            bank/building society if you would like payment to be made on a
            specific date.
          </p>
          <p className="content__text">
            Call us to set up, edit or cancel your Direct Debit.
          </p>
        </DisclosureContent>
      </div>
      <div className="payment-disclosure disclosure">
        <div className="disclosure-header">
          <Disclosure {...disclosure2} className="disclosure__btn" />
          <h4 className="disclosure-header__header">Online</h4>
        </div>

        <DisclosureContent
          {...disclosure2}
          className="disclosure__content content"
        >
          <p className="content__text">
            This will take 1 working day to be applied to your account.
          </p>
          <p className="content__text">
            To pay some or all of your account balance online, follow these
            steps:
          </p>
          <ul className="content-list">
            <li className="content-list__item">
              Log in to My Account using your email address or customer number
              and password.
            </li>
            <li className="content-list__item">
              Select payments from the menu on the left-hand side.
            </li>
            <li className="content-list__item">
              Choose your preferred method of payment.
            </li>
          </ul>
          <p className="content__text">
            We accept all major credit and debit cards such as Visa, Visa
            Electro, MasterCard, Maestro. The card must be registered to the
            address where your Postil&#39; Account is held.
          </p>
          <p className="content__text">
            We are unable to accept cards that are due to expire within the next
            5 days. Card details are checked and verified by a third party and
            goods are dispatched once authorisation has been obtained.
          </p>
        </DisclosureContent>
      </div>
      <div className="payment-disclosure disclosure">
        <div className="disclosure-header">
          <Disclosure {...disclosure3} className="disclosure__btn" />
          <h4 className="disclosure-header__header">SelfServe</h4>
        </div>

        <DisclosureContent {...disclosure3} className="disclosure__content">
          <p className="content__text">
            This will take 1 working day to be applied to your account.
          </p>
          <p className="content__text">
            If you are a our customer, call free on +38 093 875 9925 and key in
            your SelfServe number (as shown on your delivery note). Enter the
            amount you wish to pay and your credit/debit card details.
            Alternatively, call us on +38 093 875 9932 and we’ll take your
            payment over the phone.
          </p>
        </DisclosureContent>
      </div>
      <div className="payment-disclosure disclosure">
        <div className="disclosure-header">
          <Disclosure {...disclosure4} className="disclosure__btn" />
          <h4 className="disclosure-header__header">
            Telephone or Internet Banking
          </h4>
        </div>

        <DisclosureContent {...disclosure4} className="disclosure__content">
          <p className="content__text">
            This will take 3 working days to be applied to your account.
          </p>
          <p className="content__text">
            You can also make a payment to Next from your bank account using the
            following details:
          </p>
          <p className="content__text">Account Name: Postil PLC</p>
          <p className="content__text">Bank Account Number: 1234567</p>
          <p className="content__text">Sort Code: 50-00-01</p>
          <p className="content__text">Reference: Your Customer Number</p>
          <p className="content__text">
            Your customer number can be found on top of your Next statement,
            delivery note or any correspondence received from Postil&#39;.
          </p>
          <p className="content__text">
            On most online banking services you will already find Next has been
            set up as a payee. Please ensure you quote your customer number.
          </p>
          <p className="content__text">
            If you are abroad and not paying in US dollars then please use a
            currency converter to ensure you do not under or overpay.
          </p>
          <p className="content__text">
            There may be a charge for this service, so it is advisable that you
            check this with your bank before making the transaction.
          </p>
        </DisclosureContent>
      </div>
      <div className="payment-disclosure disclosure">
        <div className="disclosure-header">
          <Disclosure {...disclosure5} className="disclosure__btn" />
          <h4 className="disclosure-header__header">PayPal</h4>
        </div>

        <DisclosureContent {...disclosure5} className="disclosure__content">
          <p className="content__text">
            This will take 2 working days to be applied to your account.
          </p>
          <p className="content__text">
            PayPal is a secure payment method you can use to make a payment
            online. You only need your email address and password to make a
            payment.
          </p>
          <p className="content__text">
            You can use PayPal by following these steps:
          </p>
          <ul className="content-list">
            <li className="content-list__item">
              Log in to My Account using your email address or customer number
              and password.
            </li>
            <li className="content-list__item">
              Key in the amount you wish to pay, and then click on the blue Pay
              via PayPal button
            </li>
            <li className="content-list__item">
              This will take you to the PayPal login page. Sign in with your
              PayPal email address and password
            </li>
            <li className="content-list__item">
              Select the Pay Now button to confirm your payment
            </li>
          </ul>
          <p className="content__text">
            If for any reason the payment has been declined, an immediate
            message will be displayed on the PayPal payment page to indicate
            this.
          </p>
          <p className="content__text">
            If there are any queries you may need to contact PayPal for further
            assistance.
          </p>
          <p className="content__text">
            If the payment does not show on your account within 2 working days,
            please check if the amount has been taken from your PayPal account.
          </p>
          <p className="content__text">
            If you have an email address registered on your account, you will
            receive a payment confirmation through email once your payment has
            credited your account.
          </p>
          <p className="content__text">
            All payments need to be made before 8pm to show in the time
            specified. Any payments made after 8pm Friday will show on your
            account the following Tuesday.
          </p>
        </DisclosureContent>
      </div>
      <h4 className="payment__off-title">Where can I make a payment?</h4>
      <p className="payment__text">
        You can also make a payment by visiting one of the following:
      </p>
      <div className="payment-disclosure disclosure disclosure--boredered">
        <div className="disclosure-header">
          <Disclosure {...disclosure6} className="disclosure__btn" />
          <h4 className="disclosure-header__header">Any Bank</h4>
        </div>

        <DisclosureContent {...disclosure6} className="disclosure__content">
          <p className="content__text">
            This will take 3 working days to be applied to your account.
          </p>
          <p className="content__text">
            Take your posted Postil&#39; statement to any Bank and pay over the
            counter.
          </p>
          <p className="content__text">
            Please quote sort code 50-00-01, bank account number 1234567 and
            your customer number. Some banks may charge for this service.
          </p>
        </DisclosureContent>
      </div>
      <div className="payment-disclosure disclosure">
        <div className="disclosure-header">
          <Disclosure {...disclosure7} className="disclosure__btn" />
          <h4 className="disclosure-header__header">Our Store</h4>
        </div>

        <DisclosureContent {...disclosure7} className="disclosure__content">
          <p className="content__text">
            Our customers can pay at the till point in one of our stores. A
            member of our staff will take your account number or swipe your card
            and then process the payment. Please retain your receipt.
            Postil&#39; cards and refund cards cannot be used as payment.
          </p>
        </DisclosureContent>
      </div>
      <h4 className="payment__off-title">Payment Queries</h4>
      <div className="payment-disclosure disclosure">
        <div className="disclosure-header">
          <Disclosure {...disclosure8} className="disclosure__btn" />
          <h4 className="disclosure-header__header">
            What if my payment is not accepted
          </h4>
        </div>

        <DisclosureContent {...disclosure8} className="disclosure__content">
          <p className="content__text">
            Your payment will not be accepted if the credit/debit card you are
            using to make the payment is not registered to the same address as
            the billing address that is on your Nextpay account. This is a
            measure we take to protect both our customers and ourselves from
            fraud.
          </p>
          <p className="content__text">
            If your card is registered to the same address, please ensure that
            you have entered the correct security code and expiry date. If this
            still doesn’t work, your card issuer may have declined your payment.
            Please contact them directly as we do not have any information about
            why payments are declined.
          </p>
        </DisclosureContent>
      </div>
      <h2 className="payment__main-title">Delivery</h2>
      <div className="payment-disclosure disclosure disclosure--boredered">
        <div className="disclosure-header">
          <Disclosure {...disclosure9} className="disclosure__btn" />
          <h4 className="disclosure-header__header">
            Will my items be delivered together?
          </h4>
        </div>

        <DisclosureContent {...disclosure9} className="disclosure__content">
          <p className="content__text">
            In most cases your whole order will be delivered at the same time.
            The following exceptions apply:
          </p>
          <p className="content__text">
            Delayed items will be despatched as soon as stock becomes available.
          </p>
          <p className="content__text">
            If your order contains furniture, which requires a larger vehicle,
            or a two-person delivery team, it will be delivered separately to
            the rest of your order. In most cases, you&#39;ll be able to select
            the delivery day and time during the checkout process when placing
            your order.
          </p>
          <p className="content__text">
            If your order has been despatched into our courier network,
            we&#39;ll send you an email enabling you to track your delivery. The
            email will detail how many parcels have been despatched to you.
          </p>
        </DisclosureContent>
      </div>
      <div className="payment-disclosure disclosure">
        <div className="disclosure-header">
          <Disclosure {...disclosure10} className="disclosure__btn" />
          <h4 className="disclosure-header__header">
            When will I receive delayed items?
          </h4>
        </div>

        <DisclosureContent {...disclosure10} className="disclosure__content">
          <p className="content__text">
            When your item becomes available for despatch, we will email you so
            you can track your order.
          </p>
        </DisclosureContent>
      </div>
      <div className="payment-disclosure disclosure">
        <div className="disclosure-header">
          <Disclosure {...disclosure11} className="disclosure__btn" />
          <h4 className="disclosure-header__header">
            Can I have my orders delivered to an alternative or work adress?
          </h4>
        </div>

        <DisclosureContent {...disclosure11} className="disclosure__content">
          <p className="content__text">
            To change your delivery address or add a new delivery address,
            follow these steps:
          </p>
          <ul className="content-list">
            <li className="content-list__item">
              Log in to My Account using your email address or customer number
              and password.
            </li>
            <li className="content-list__item">
              Select the delivery address option from the menu on the left-hand
              side.
            </li>
            <li className="content-list__item">
              Here you will be able to add up to five addresses to your account.
            </li>
          </ul>
          <p className="content__text">
            You can also add an additional delivery address at the checkout
            stage when placing an order.
          </p>
          <p className="content__text">
            Please note that when you add an additional delivery address to your
            account you will be asked to authenticate the new address against
            your billing address by entering your credit card details (the
            credit card must be registered to your billing address).
          </p>
        </DisclosureContent>
      </div>
    </div>
  );
};

export default PaymentDelivery;
