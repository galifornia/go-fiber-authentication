import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
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

          <div className='checkbox mb-3'>
            <label htmlFor='remember-me'>Remember me</label>
            <input id='remember-me' type='checkbox' value='remember-me' />
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
          <p className='mt-5 mb-3 text-muted'>&copy; 2017–2021</p>
        </form>
      </main>
    </div>
  );
}

export default App;
