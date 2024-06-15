import ListItems from 'components/UserTabs/ListItems/ListItems';
import UserCard from './UserCard/UserCard';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFollowing } from 'store/authSlice/selectors';
import { getFollowers } from 'services/followers';
import Pagination from 'components/Shared/Pagination/Pagination';


const Followers = () => {
  const [params] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const following = useSelector(selectFollowing);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const page = params.get('page') || 1;
        const { data } = await getFollowers({
          page,
          limit: 5,
        });
        console.log(data);
        setUsers(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {}
    };
    fetchUsers();
  }, [params]);
  return (
    <div>
      <h3 className="visually-hidden">Followers</h3>
      <ListItems>
        {users.map(user => (
          <UserCard key={user.id} user={user} following={following} />
        ))}
      </ListItems>
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default Followers;
