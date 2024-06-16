import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addFavorite, removeFavorite } from 'services/recipes';
import { selectUser } from 'store/authSlice/selectors';
import { showError } from 'helpers/notification';

import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeMainInfo from './RecipeMainInfo/RecipeMainInfo';
import RecipePreparation from './RecipePreparation/RecipePreparation';
import { useAuthModalContext } from 'components/AuthModalContext';

const RecipeInfo = ({ recipe }) => {
  const {
    thumb,
    title,
    category,
    time,
    area: { name },
    description,
    owner,
    ingredients,
    instructions,
    favorite,
  } = recipe;

  const { onAuthOpen } = useAuthModalContext();

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    user ? favorite.includes(user.id) : false
  );

  const handlerGoToOwner = () => {
    if (user) {
      navigate(`/user/${recipe.owner._id}/recipes`);
    } else {
      onAuthOpen(`/user/${recipe.owner._id}/recipes`);
    }
  };

  const handlerAddToFavorite = async () => {
    if (!user) {
      onAuthOpen();
      return;
    }
    try {
      setIsPending(true);
      if (isFavorite) {
        await removeFavorite(recipe._id);
        setIsFavorite(false);
      } else {
        await addFavorite(recipe._id);
        setIsFavorite(true);
      }
    } catch (error) {
      showError(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <RecipeMainInfo
        thumb={thumb}
        title={title}
        category={category.name}
        time={time}
        area={name}
        description={description}
        owner={owner}
        handlerGoToOwner={handlerGoToOwner}
      />
      <RecipeIngredients ingredients={ingredients} />
      <RecipePreparation
        instructions={instructions}
        status={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        handlerAddToFavorite={handlerAddToFavorite}
        isPending={isPending}
      />
    </>
  );
};

export default RecipeInfo;
