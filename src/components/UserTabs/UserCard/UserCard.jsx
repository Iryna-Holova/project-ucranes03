import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import sprite from '../../../images/icons.svg';

const UserCard = ({ tabType, user: { name, avatar_preview, recipes } }) => {
  return (
    <li>
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
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <img src={recipe.preview} alt="recipe" />
          </li>
        ))}
      </ul>
      <svg width="18" height="18">
        <use href={sprite + '#icon-arrow-up-right'}></use>
      </svg>
    </li>
  );
};

export default UserCard;
