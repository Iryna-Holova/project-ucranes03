import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';

const UserCard = ({ tabType, name, avatar_preview, recipes }) => {
  return (
    <div>
      <div>
        <img src={avatar_preview} alt={name + "'s photo"} />
        <div>
          <p>{name}</p>
          <p>Own recipes: {recipes.length}</p>
          {tabType === 'followers' && (
            <ButtonLink
              type="button"
              color="light"
              size="small"
              onClick={console.log}
            >
              Follow
            </ButtonLink>
          )}
          {tabType === 'following' && (
            <ButtonLink
              type="button"
              color="light"
              size="small"
              onClick={console.log}
            >
              Following
            </ButtonLink>
          )}
        </div>
      </div>
      <ul>{recipes.map(recipy => <li key={recipy.id}><img src={recipy.preview} alt="" /></li>)}</ul>
    </div>
  );
};

export default UserCard;
