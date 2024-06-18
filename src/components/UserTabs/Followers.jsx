import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { selectFollowing } from 'store/authSlice/selectors';
import { getFollowers, getOwnFollowers } from 'services/followers';
import { showError } from 'helpers/notification';
import { scrollToTabs } from 'helpers/scolls';
import Pagination from 'components/Shared/Pagination/Pagination';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import Empty from 'components/Shared/Empty/Empty';
import UserCard from './UserCard/UserCard';
import UserCardSkeleton from './UserCard/UserCardSkeleton';

const Followers = () => {
  const user = useParams().id;
  const topElementRef = useRef(null);
  const isCurrent = user === 'current';
  const following = useSelector(selectFollowing);
  const [params, setParams] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const page = params.get('page')
      if(!page) return;
      setLoading(true);
      try {
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
      } catch (error) {
        showError(error.response.data);
      } finally {
        setLoading(false);
      }
    };
    scrollToTabs(topElementRef.current);
    fetchUsers();
  }, [isCurrent, params, user]);

  useEffect(() => {
    setParams({ page: 1 }, { replace: true });
  }, [setParams])
  

  return (
    <div>
      <span ref={topElementRef} style={{ position: 'absolute' }}></span>
      <h3 className="visually-hidden">Followers</h3>
      {!isLoading && users.length === 0 ? (
        <Empty>
          There are currently no followers on your account. Please engage our
          visitors with interesting content and draw their attention to your
          profile.
        </Empty>
      ) : (
        <ListItems>
          {isLoading &&
            [...Array(5)].map((_, idx) => <UserCardSkeleton key={idx} />)}
          {!isLoading &&
            users.map(user => (
              <UserCard key={user.id} user={user} following={following} />
            ))}
        </ListItems>
      )}
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default Followers;
