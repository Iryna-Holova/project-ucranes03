import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import css from './RecipePreparation.module.css';

const RecipePreparation = ({ instructions, status, handlerAddToFavorite }) => {
  const transformInstructions = instructions.split('\r\n');
  return (
    <>
      <div className={css.preparation_wrapper}>
        <h3 className={css.title}>Recipe Preparation</h3>
        {transformInstructions.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
      <ButtonLink
        type="button"
        color="light"
        size="normal"
        onClick={handlerAddToFavorite}
      >
        {status}
      </ButtonLink>
    </>
  );
};

export default RecipePreparation;
