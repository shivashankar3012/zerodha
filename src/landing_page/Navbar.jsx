function Navbar() {
  return (
    // <div className="container">
      <nav class="navbar navbar-expand  bg-body-tertiary  sticky-top border-bottom " 
      style={{backgroundColor:'#fff', width:'100%'}}>
        <div class="container p-1">
          <a class="navbar-brand" href="/">
            <img src="media/images/logo.svg" alt="logo" style={{width:'20%'}}/>
          </a>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">  
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/signup">
                    Signup
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/product">
                    Product
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/support">
                    Support
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    // </div>
  );
}

export default Navbar;
