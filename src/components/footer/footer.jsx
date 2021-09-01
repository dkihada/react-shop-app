import "./footer.css";

function Footer() {
  return (
    <footer class='footer'>
      <div class='has-text-centered'>
        <p>
          <strong className='is-size-3'>React Shop Portfolio App</strong>
          <br />
          <br />
          <a className='mr-5' href='!#'>
            GitHub Profile <i class='fab fa-github ml-3'></i>
          </a>
          <a href='!#'>
            GitHub Repo <i class='fab fa-github ml-3'></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
