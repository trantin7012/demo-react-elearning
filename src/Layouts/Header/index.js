
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  
  render() {
   
    
    return (
      
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary mb-6">
          <a className="navbar-brand" href="#">E-Learning</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink activeStyle={{ color: 'green' }} exact to="/" className="nav-link">Home</NavLink>
              </li>
             
            </ul>
           
            <ul className="navbar-nav ml-auto">
              {this.props.credentials ? (
              <div className="btn-group">

                <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Hi {this.props.credentials.hoTen}  </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>

              </div>
           
             
                

              ) : (<><li className="nav-item">
                <NavLink activeStyle={{ color: 'green' }} to="/signup" className="nav-link">Sign Up</NavLink>
              </li>
                <li className="nav-item">
                  <NavLink activeStyle={{ color: 'green' }} to="/signin" className="nav-link">Sign In</NavLink>
                </li> </>)}



            </ul>
          </div>
        </nav>
      </div>

    )
  }
}
// nhận vào state từ store
const mapStateToProps = state => {
  return {
    credentials: state.user.credentials
  }
}

export default connect(mapStateToProps)(Header);
