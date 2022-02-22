export default interface IProduct {
  availableSizes: string[];
  currencyFormat: string;
  currencyId: string;
  description: string;
  id: number;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: BigInt;
  title: string;
  style: string;
}
