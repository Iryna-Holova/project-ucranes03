import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';

const RecipePreparation = ({ instructions, status }) => {
  return (
    <div>
      <h3>Recipe Preparation</h3>
      <p>{instructions}</p>
      <ButtonLink
        type="button"
        color="light"
        size="normal"
        onClick={console.log}
      >
        {status}
      </ButtonLink>
    </div>
  );
};

export default RecipePreparation;
