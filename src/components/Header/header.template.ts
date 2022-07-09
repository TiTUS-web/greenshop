export function createHeaderTemplate() {
  return `
    <header class="header app__header">
    <a class="logo header__logo" href="#">
      <img class="logo__img" src="src/images/logo.png" alt="logo" />
    </a>

    <div class="navigation header__navigation">
      <button class="navbtn navigation__navbtn navbtn_home" type="button">
        Home
      </button>
      <button class="navbtn navigation__navbtn navbtn_shop" type="button">
        Shop
      </button>
      <button class="navbtn navigation__navbtn navbtn_blogs" type="button">
        Blogs
      </button>
    </div>

    <div class="tools header__tools">
      <a class="navlink tools__navlink navlink_search" href="#">
        <img
          src="src/images/search.svg"
          class="icon navlink__icon"
          alt="search"
        />
      </a>
      <a class="navlink tools__navlink navlink_basket" href="#">
        <img
          src="src/images/basket.svg"
          class="icon navlink__icon"
          alt="basket"
        />
        <div class="counter navlink__counter" alt="basket">6</div>
      </a>
      <a class="navlink tools__navlink navlink_login" href="#">
        <img
          src="src/images/logout.svg"
          class="icon navlink__icon"
          alt="login"
        />
        Login
      </a>
    </div>
  </header>
    `;
}
