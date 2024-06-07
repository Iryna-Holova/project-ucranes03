import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import icons from '../../images/icons.svg';

const AddRecipeForm = () => {
  return (
    <div>
      AddRecipeForm
      <ButtonLink
        type="button"
        color="secondary"
        size="normal"
        onClick={console.log}
      >
        <span>Add ingredient</span>
        <svg>
          <use href={`${icons}#icon-plus`} />
        </svg>
      </ButtonLink>
      <ButtonLink
        type="button"
        color="primary"
        size="large"
        onClick={console.log}
      >
        Publish
      </ButtonLink>
    </div>
  );
};

export default AddRecipeForm;
