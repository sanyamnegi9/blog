import { Avatar } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserStatusContext } from '../contexts/UserStatusContext';

const UserIcon = () => {
  const {user} = useContext(UserStatusContext);
  return (
    <Link to={`${user?"/dashboard":"/login"}`} className=" capitalize" >
      <Avatar
        alt={user?.name}
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw1peOcGU-lXQ_e5EvTzOh7j&ust=1701597015372000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiqxf-88IIDFQAAAAAdAAAAABAE"
        sx={{ width: 45, height: 45 }}
      />
    </Link>
  );
}

export default UserIcon