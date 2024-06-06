import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';

const UserInfo = () => {
  return (
    <div>
      UserInfo
      <ButtonLink type="button" onClick={console.log}>
        Log out
      </ButtonLink>
      <ButtonLink type="button" onClick={console.log}>
        Follow
      </ButtonLink>
    </div>
  );
};

export default UserInfo;
