import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/users/userSlice';

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id.value}>
              {user.name.first} {user.name.last}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchedUsers;
