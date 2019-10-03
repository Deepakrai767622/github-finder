import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h2>
        <i className={icon}></i> {title}
      </h2>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
