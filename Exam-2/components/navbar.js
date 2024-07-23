const navbar = (isLoggedIn = false, username = "") => {
  return `
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand mt-2 mt-lg-0" href="#">
      <img
        src="https://www.zarla.com/images/zarla-m-1x1-2400x2400-20211117-yfr6bmdv489bb7b79mxg.png?crop=1:1,smart&width=250&dpr=2"
        height="40"
        class="rounded-circle"
        alt="MDB Logo"
        loading="lazy"
      />
    </a>

    <div class="collapse navbar-collapse" id="">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/Exam-2/html/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/Exam-2/html/dashboard.html">Dashboard</a>
        </li>
        ${isLoggedIn ? `
        <li class="nav-item">
          <span class="nav-link fw-bold"> ${username}</span>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" id="logout-link">Logout</a>
        </li>
        ` : `
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/Exam-2/html/login.html">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/Exam-2/html/signup.html">Signup</a>
        </li>
        `}
      </ul>
    </div>
  </div>
</nav>
  `;
};

export default navbar;
