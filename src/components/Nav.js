import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {

  // To adding the links in the navbar  we need to use LINK tag and  also need to
  // import form react router dom 

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React All Concepts</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">Counter App</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/state">State Change</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/post">Users Fetch Api</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">Posts Axios Api</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Products-Crud</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/life">Life cycle hook</Link>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Nav
