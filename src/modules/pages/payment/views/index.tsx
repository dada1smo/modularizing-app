import DonationCheckbox from '../components/DonationCheckbox.tsx';
import PaymentMethods from '../components/PaymentMethods';
import { usePaymentMethods } from '../hooks/use-payment-methods';
import { useRoundUp } from '../hooks/use-round-up';

const PaymentView = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();
  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(amount);

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip)}
      />
      <button>${amount}</button>
    </div>
  );
};

function formatCheckboxLabel(agreeToDonate: boolean, tip: number) {
  return agreeToDonate
    ? 'Thanks for your donation.'
    : `I would like to donate $${tip} to charity.`;
}

export default PaymentView;
