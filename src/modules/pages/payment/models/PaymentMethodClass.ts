import { PaymentMethodType } from '../types/PaymentMethodType';

export default class PaymentMethodClass {
  private paymentMethod: PaymentMethodType;

  constructor(paymentMethod: PaymentMethodType) {
    this.paymentMethod = paymentMethod;
  }

  get code() {
    return this.paymentMethod.code;
  }

  get name() {
    return this.paymentMethod.name;
  }

  get codeWithName() {
    return `${this.code} ${this.name}`;
  }

  get isDefaultMethod() {
    return this.code === 1;
  }
}
