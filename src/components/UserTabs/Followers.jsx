import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { selectFollowing } from 'store/authSlice/selectors';
import { getFollowers, getOwnFollowers } from 'services/followers';
import Pagination from 'components/Shared/Pagination/Pagination';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import Empty from 'components/Shared/Empty/Empty';
import UserCard from './UserCard/UserCard';
import UserCardSkeleton from './UserCard/UserCardSkeleton';
import { selectFollowers } from 'store/followersSlice/selectors';
import { fetchFollowers } from 'store/followersSlice/thunk';

const Followers = () => {
  const [params] = useSearchParams();
  const user = useParams().id;
  const isCurrent = user === 'current';
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const following = useSelector(selectFollowing);

  const dispatch = useDispatch();
  const followers = useSelector(selectFollowers);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const page = params.get('page') || 1;
        const { data } = isCurrent
          ? await getOwnFollowers({
              page,
              limit: 5,
            })
          : await getFollowers(user, {
              page,
              limit: 5,
            });
        setUsers(data.results);
        setTotalPages(data.totalPages);
        dispatch(fetchFollowers({user, pagination: {
          page,
          limit: 5,
        }}));
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [params, user, isCurrent]);

  return (
    <div>
      <h3 className="visually-hidden">Followers</h3>
      {users.length === 0 ? (
        <Empty>
          There are currently no followers on your account. Please engage our
          visitors with interesting content and draw their attention to your
          profile.
        </Empty>
      ) : (
        <ListItems>
          {isLoading &&
            [...Array(5)].map((item, idx) => <UserCardSkeleton key={idx} />)}
          {!isLoading &&
            followers.map(user => (
              <UserCard key={user.id} user={user} following={following} />
            ))}
        </ListItems>
      )}

      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default Followers;
