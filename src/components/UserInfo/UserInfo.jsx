import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOwnInfo, getCurrentInfo } from 'services/userInfo';
// import css from "./UserInfo.module.css";

const UserInfo = () => {
  const params = useParams();
  const [isCurrent, setIsCurrent] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params.id === "current") {
          const { data } = await getOwnInfo();
          setUserData(data);
          setIsCurrent(true);
        } else {
          const { data } = await getCurrentInfo(params.id);
          setUserData(data);
          setIsCurrent(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params]);

  const { email, recipes, favorites, followers, following, name } = userData || {};

  return (
    <>
      {userData ? (
        <div>
          <p>{name}</p>
          <ul>
            <li><span>Email</span>: <span>{email}</span></li>
            <li><span>Added recipes</span>: <span>{recipes}</span></li>
            {isCurrent && <li><span>Favorites</span>: <span>{favorites}</span></li>}
            <li><span>Followers</span>: <span>{followers}</span></li>
            {isCurrent && <li><span>Following</span>: <span>{following}</span></li>}
          </ul>
          <ButtonLink type="button" onClick={() => console.log('Log out clicked')}>
            Log out
          </ButtonLink>
          <ButtonLink type="button" onClick={() => console.log('Follow clicked')}>
            Follow
          </ButtonLink>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UserInfo;