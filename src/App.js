import React from 'react'
import './scss/index.scss'

function App() {
  return (
    <div className='App'>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
            </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
            </p>
        </div>
      </section>
      <section className="section">
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <a href="#!" className="button is-primary">Primary</a>
          <a href="#!" className="button is-link">Link</a>
        </div>
      </section>
    </div>
  )
}

export default App
