
const navbar = (login = "login", signup = "signup") => {

  return `<nav class="navbar navbar-expand-lg  text-primary p-0">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <a class="nav-link text-light " aria-current="page" href="/Project-localstorage/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/Project-localstorage/pages/product.html">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/Project-localstorage/pages/addProduct.html">Add Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/Project-localstorage/pages/cart.html">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/Project-localstorage/pages/Login.html">${login}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/Project-localstorage/pages/Signup.html">${signup}</a>
        </li>
      </ul>
      <form class="d-flex" role="search" id="searching">
        <input
          class="form-control me-2 bg text-center "
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="searchValue"

        />
        <button class="btn text-light " id="btn1" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`
}



export default navbar
