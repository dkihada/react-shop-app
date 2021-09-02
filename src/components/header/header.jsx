import './header.css';

function Header() {
  return (
    <nav
      className='navbar container'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand is-justify-content-space-between'>
        <a className='navbar-item is-size-4' href='!#'>
          <i className='fas fa-shopping-bag mr-3'></i> REACT SHOP
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item' href='https://github.com/dkihada'>
            GitHub Profile <i className='fab fa-github ml-3'></i>
          </a>

          <a
            className='navbar-item'
            href='https://github.com/dkihada/react-shop-app'
            target='_blank'
          >
            GitHub Repo <i className='fab fa-github ml-3'></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export { Header };
