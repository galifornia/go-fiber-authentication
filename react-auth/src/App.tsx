import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
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
                <a className='nav-link' href='#'>
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className='form-signin'>
        <form>
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
