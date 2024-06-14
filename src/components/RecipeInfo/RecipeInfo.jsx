import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addFavorite, removeFavorite } from 'services/recipes';
import { selectUser } from 'store/authSlice/selectors';

import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeMainInfo from './RecipeMainInfo/RecipeMainInfo';
import RecipePreparation from './RecipePreparation/RecipePreparation';
import { useAuthModal } from 'hooks/use-auth-modal';
import Modal from 'components/Modal/Modal';
import AuthModal from 'components/AuthModal/AuthModal';

const RecipeInfo = ({ recipe }) => {
  const {
    thumb,
    title,
    category,
    time,
    description,
    owner,
    ingredients,
    instructions,
    favorite,
  } = recipe;

  const { onAuthOpen, onAuthClose, onToggleMode, isAuthOpen } = useAuthModal();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(
    user ? favorite.includes(user.id) : false
  );

  const handlerGoToOwner = () => {
    if (user) {
      navigate(`/user/${recipe.owner._id}/recipes`);
    } else {
      onAuthOpen(true);
    }
  };

  const handlerAddToFavorite = async () => {
    if (!user) {
      onAuthOpen(true);
      return;
    }
    try {
      if (isFavorite) {
        await removeFavorite(recipe._id);
        setIsFavorite(false);
      } else {
        await addFavorite(recipe._id);
        setIsFavorite(true);
      }
    } catch (error) {
      throw Error(error.message);
    }
  };

  return (
    <>
      <RecipeMainInfo
        thumb={thumb}
        title={title}
        category={category.name}
        time={time}
        description={description}
        owner={owner}
        handlerGoToOwner={handlerGoToOwner}
      />
      <RecipeIngredients ingredients={ingredients} />
      <RecipePreparation
        instructions={instructions}
        status={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        handlerAddToFavorite={handlerAddToFavorite}
      />
      {isAuthOpen && (
        <Modal onClose={onAuthClose}>
          <AuthModal onToggleMode={onToggleMode} />
        </Modal>
      )}
    </>
  );
};

export default RecipeInfo;
