import ListItems from 'components/UserTabs/ListItems/ListItems';
import UserCard from './UserCard/UserCard';
import { useEffect, useState } from 'react';

import Pagination from 'components/Shared/Pagination/Pagination';
import { getFollowings} from 'services/followers';
import { useSearchParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { selectFollowing } from 'store/authSlice/selectors';


const Following = () => {
  const [params] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);  
  const following = useSelector(selectFollowing);

  useEffect(() => {
    const fetchUsers = async () => {
            try {        
        const page = params.get('page') || 1;
        console.log(page);
        const { data } = await getFollowings({
          page,
          limit: 5,
        });
        setUsers(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {}
    };    
    fetchUsers();
  }, [params, following]);

  

  return (
    <div>
      <h3 className="visually-hidden">Following</h3>
      <ListItems>
        {users.map(user => (
          <UserCard key={user.id} user={user} following={following} />
        ))}
      </ListItems>
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default Following;
