import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectFollowing } from 'store/authSlice/selectors';
import { getFollowings } from 'services/followers';
import { showError } from 'helpers/notification';
import { scrollToTabs } from 'helpers/scolls';
import Pagination from 'components/Shared/Pagination/Pagination';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import Empty from 'components/Shared/Empty/Empty';
import UserCard from './UserCard/UserCard';
import UserCardSkeleton from './UserCard/UserCardSkeleton';

const Following = () => {
  const topElementRef = useRef(null);
  const [params, setParams] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const following = useSelector(selectFollowing);

  const fetchUsers = useCallback(async () => {
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
      showError(error.response.data);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    scrollToTabs(topElementRef.current);
    fetchUsers();
  }, [fetchUsers]);

  const handleFollowingRemove = () => {
    if (users.length === 1 && params.get('page') === totalPages.toString()) {
      setParams({ page: totalPages - 1 });
    } else {
      scrollToTabs(topElementRef.current);
      fetchUsers();
    }
  };

  return (
    <div>
      <span ref={topElementRef} style={{ position: 'absolute' }}></span>
      <h3 className="visually-hidden">Following</h3>
      {!isLoading && users.length === 0 ? (
        <Empty>
          Your account currently has no subscriptions to other users. Learn more
          about our users and select those whose content interests you.
        </Empty>
      ) : (
        <ListItems>
          {isLoading &&
            [...Array(5)].map((_, idx) => <UserCardSkeleton key={idx} />)}
          {!isLoading &&
            users.map(user => (
              <UserCard
                key={user.id}
                user={user}
                following={following}
                onRemove={handleFollowingRemove}
              />
            ))}
        </ListItems>
      )}
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default Following;
