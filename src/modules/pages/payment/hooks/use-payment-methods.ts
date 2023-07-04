import { useEffect, useState } from 'react';
import PaymentMethodClass from '../models/PaymentMethodClass';
import paymentMethodService from '../services/payment-method-service';

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodClass[]>(
    []
  );

  useEffect(() => {
    paymentMethodService().then((methods) => setPaymentMethods(methods));
  }, []);

  return {
    paymentMethods,
  };
};
