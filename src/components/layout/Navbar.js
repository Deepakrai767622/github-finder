<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'
=======
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> d83df142da720b1667ad42094d86b54a6e7bb103

const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h2>
        <i className={icon}></i> {title}
      </h2>
    </div>
  );
};

<<<<<<< HEAD
const Navbar = ({ title }) => {

    return (
        <div className="navbar bg-primary">
            <h2>
                <div className="fab fa-github"></div> {title}
            </h2>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
=======
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
>>>>>>> d83df142da720b1667ad42094d86b54a6e7bb103
