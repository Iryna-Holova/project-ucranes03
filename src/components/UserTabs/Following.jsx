import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectFollowing } from 'store/authSlice/selectors';
import { getFollowings } from 'services/followers';
import Pagination from 'components/Shared/Pagination/Pagination';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import UserCard from './UserCard/UserCard';
import UserCardSkeleton from './UserCard/UserCardSkeleton';

const Following = () => {
  const [params] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const following = useSelector(selectFollowing);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const page = params.get('page') || 1;
        const { data } = await getFollowings({
          page,
          limit: 5,
        });
        setUsers(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [params, following]);
  return (
    <div>
      <h3 className="visually-hidden">Following</h3>
      <ListItems>
        {isLoading &&
          [...Array(5)].map((item, idx) => <UserCardSkeleton key={idx} />)}
        {!isLoading &&
          users.map(user => (
            <UserCard key={user.id} user={user} following={following} />
          ))}
      </ListItems>
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default Following;
