export const Discount = (price: number, discountPercentage: number): number => {
  return price - (price * discountPercentage) / 100;
  //   10 - (10 *2)/100
};
