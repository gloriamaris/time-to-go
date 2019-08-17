import React from 'react'

const Header = () => (
  <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <a className='navbar-item' href='https://bulma.io'>
        <img src='https://bulma.io/images/bulma-logo.png' alt='bulma' width='112' height='28' />
      </a>

      <a role='button' href='#!' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
        <span aria-hidden='true' />
        <span aria-hidden='true' />
        <span aria-hidden='true' />
      </a>
    </div>
  </nav>
)

export default Header
