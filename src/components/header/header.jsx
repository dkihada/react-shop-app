import "./header.css";

function Header() {
  return (
    <nav
      className='navbar container'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a className='navbar-item is-size-4' href='!#'>
          <i class='fas fa-shopping-bag mr-3'></i> REACT SHOP
        </a>

        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item'>
            GitHub Profile <i className='fab fa-github ml-3'></i>
          </a>

          <a className='navbar-item'>
            GitHub Repo <i className='fab fa-github ml-3'></i>
          </a>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a className='button is-primary'>
                <i className='fas fa-shopping-basket'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };
