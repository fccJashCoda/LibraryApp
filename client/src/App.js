import './App.css';
import NavComponent from './components/nav/NavbarComponent';
import FormComponent from './components/form/FormComponent';
import InputComponent from './components/form/InputComponent';

function App() {
  return (
    <div className='App'>
      <NavComponent />
      <FormComponent />
      {/* <InputComponent /> */}
      {/* <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarColor02'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>
                  Home
                  <span className='visually-hidden'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-sm-2'
                type='text'
                placeholder='Search'
              />
              <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}

      <main className='container mt-5'>
        {/* <form>
          <fieldset>
            <div className='form-group'>
              <label htmlFor='title' className='form-label mt-4'>
                Title
              </label>
              <input
                type='text'
                className='form-control'
                id='title'
                placeholder='Title'
              />
            </div>
            <div className='form-group'>
              <label for='author' className='form-label mt-4'>
                Author
              </label>
              <input
                type='text'
                className='form-control'
                id='author'
                placeholder='Author'
              />
            </div>
            <div className='form-group'>
              <label for='pages' className='form-label mt-4'>
                Pages
              </label>
              <input
                type='number'
                className='form-control'
                id='pages'
                placeholder='0'
              />
            </div>
            <fieldset>
              <legend className='mt-4'>Read</legend>
              <div className='form-check form-switch'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='readStatus'
                />
                <label className='form-check-label' for='readStatus'>
                  Did you read this book?
                </label>
              </div>
            </fieldset>

            <input type='submit' id='submit' className='btn btn-primary mt-4' />
          </fieldset>
        </form> */}
        <div className='app mt-5'></div>
      </main>
    </div>
  );
}

export default App;
