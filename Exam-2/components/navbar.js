const navbar = (login = "login", signup = "signup") => {

  return `

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <div class="collapse navbar-collapse" id="" >
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://www.zarla.com/images/zarla-m-1x1-2400x2400-20211117-yfr6bmdv489bb7b79mxg.png?crop=1:1,smart&width=250&dpr=2"
          height="40"
          class="rounded-circle"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/Exam-2/html/home.html">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link fw-bold" href="/Exam-2/html/dashboard.html">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/Exam-2/html/login.html">${login}</a>
        </li>
        <li class="nav-item">
          <a  lass="nav-link fw-bold" href="/Exam-2/html/signup.html">${signup}</a>
        </li>
      </ul>

    </div>

    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="Dashboard">
        <i class="fas fa-shopping-cart"></i>
      </a>

      <div class="dropdown">
        <a
          data-mdb-dropdown-init
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          aria-expanded="false"
        >
          <img
            src="https://www.zarla.com/images/zarla-m-1x1-2400x2400-20211117-yfr6bmdv489bb7b79mxg.png?crop=1:1,smart&width=250&dpr=2"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</nav>
    `
};



export default navbar