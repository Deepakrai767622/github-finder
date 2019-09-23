import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt=""
                className='round-img'
                style={{ width: "60px" }} />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    )
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}
=======
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />

      <h3>{login}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

>>>>>>> d83df142da720b1667ad42094d86b54a6e7bb103
export default UserItem;
