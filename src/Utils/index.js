/**
 * Calculates total price of a order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} total price
 */
const totalPrice = (products) => {
  let totalPrice = 0;
  products.forEach((product) => (totalPrice += product.price));
  return totalPrice;
};

export { totalPrice };
