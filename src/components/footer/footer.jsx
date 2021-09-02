import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='has-text-centered'>
        <p className='columns'>
          <br />
          <br />
          <a className='column' href='https://github.com/dkihada'>
            GitHub Profile <i className='fab fa-github ml-3'></i>
          </a>
          <strong className='is-size-3'>React Shop Portfolio App</strong>
          <a
            className='column'
            href='https://github.com/dkihada/react-shop-app'
            target='_blank'
          >
            GitHub Repo <i className='fab fa-github ml-3'></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
