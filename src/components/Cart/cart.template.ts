export function createCartTemplate() {
  return `
    <section class="cart app__cart">
    <div class="container cart__container">
      <table class="totals cart__table" cellspacing="10" cellpadding="1">
        <thead>
          <tr>
            <td class="heading totals__heading heading_products">
              Products
            </td>
            <td class="heading totals__heading heading_price">Price</td>
            <td class="heading totals__heading heading_quantity">
              Quantity
            </td>
            <td class="heading totals__heading heading_total">Total</td>
            <td class="heading totals__heading heading_delete"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content totals__content content_products">
              <img
                class="img content__img"
                src="src/images/card_1.png"
                alt="product"
              />
              <p class="contnt__title">Barberton Daisy</p>
            </td>
            <td class="content totals__content content_price">$119.00</td>
            <td class="content totals__content content_quantity">
              <div class="counter content__counter">
                <button class="button content__button">-</button>
                <p class="amount content__amount">1</p>
                <button class="button content__button">+</button>
              </div>
            </td>
            <td class="content totals__content content_total">$238.00</td>
            <td class="content totals__content content_delete">
              <button>
                <img src="src/images/cart__delete.svg" alt="delete" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container cart__container">
      <p class="cart__title">Cart Totals</p>
      <hr class="line cart__line" />
      <div class="block cart__block">
        <div class="subtotal cart__subtotal">
          <p class="title subtotal__title">Subtotal</p>
          <p class="price subtotal__price">$2,683.00</p>
        </div>
        <div class="shiping cart__shiping">
          <p class="title shiping__title">Shiping</p>
          <p class="price shiping__price">$16.00</p>
        </div>
        <div class="total cart__total">
          <p class="title total__title">Total</p>
          <p class="price total__price">$2,699.00</p>
        </div>
      </div>
      <div class="buttons cart__buttons">
        <button class="button cart__button">Proceed To Checkout</button>
        <button class="button cart__button">Continue Shopping</button>
      </div>
    </div>
  </section>
    `;
}
