import React from 'react'
import PropTypes from 'prop-types'


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
