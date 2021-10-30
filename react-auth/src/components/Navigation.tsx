const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <div className='container-fluid'>
        <div>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                LogIn
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/register'>
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
