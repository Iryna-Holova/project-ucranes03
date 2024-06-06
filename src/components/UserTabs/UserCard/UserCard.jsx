import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';

const UserCard = () => {
  return (
    <div>
      UserCard
      <ButtonLink
        type="button"
        color="light"
        size="small"
        onClick={console.log}
      >
        Follow
      </ButtonLink>
      <ButtonLink
        type="button"
        color="light"
        size="small"
        onClick={console.log}
      >
        Following
      </ButtonLink>
    </div>
  );
};

export default UserCard;
