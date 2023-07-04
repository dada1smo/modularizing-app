import PaymentMethodClass from '../models/PaymentMethodClass';
import { PaymentMethodType } from '../types/PaymentMethodType';

const paymentMethodService = async () => {
  const response = await fetch('https://brasilapi.com.br/api/banks/v1');
  const methods: PaymentMethodType[] = await response.json();

  return convertPaymentMethods(methods);
};

function convertPaymentMethods(methods: PaymentMethodType[]) {
  if (methods.length === 0) {
    return [];
  }

  const extended: PaymentMethodClass[] = methods
    .filter((b, index) => index < 10)
    .map((method) => new PaymentMethodClass(method));

  return extended;
}

export default paymentMethodService;
