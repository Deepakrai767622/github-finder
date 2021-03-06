import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle} >
        {
          users.length > 0 ?
            users.map(user => (
              <UserItem key={user.id} user={user} />
            )) : (<h1>No User Found</h1>)
        }
      </div >
    )
  }
}


const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
