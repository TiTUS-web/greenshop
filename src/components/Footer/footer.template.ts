export function createFooterTemplate() {
  return `
    <footer class="footer app__footer">
    <a class="logo footer__logo" href="#">
      <img class="logo__img" src="src/images/logo.png" alt="logo" />
    </a>
    <div class="location footer__location">
      <img
        class="location__img"
        src="src/images/location.svg"
        alt="location"
      />
      <div class="location__text">
        70 West Buckingham Ave. Farmingdale, NY 11735
      </div>
    </div>
    <div class="email footer__email">
      <img class="email__img" src="src/images/email.svg" alt="email" />
      <div class="email__text">contact@greenshop.com</div>
    </div>
    <div class="call footer__call">
      <img class="call__img" src="src/images/call.svg" alt="call" />
      <div class="call__text">+88 01911 717 490</div>
    </div>
  </footer>
    `;
}
