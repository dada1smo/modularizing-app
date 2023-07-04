import PaymentMethodClass from '../../models/PaymentMethodClass';

const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: PaymentMethodClass[];
}) => (
  <>
    {paymentMethods.map((method) => (
      <label key={method.code}>
        <input
          type="radio"
          name="payment"
          value={method.code}
          defaultChecked={method.isDefaultMethod}
        />
        <span>{method.codeWithName}</span>
      </label>
    ))}
  </>
);

export default PaymentMethods;
