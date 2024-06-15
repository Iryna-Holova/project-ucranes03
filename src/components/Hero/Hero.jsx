import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/authSlice/selectors';
import { useAuthModalContext } from 'components/AuthModalContext';
import { useMobileMediaQuery } from 'hooks/device-type';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import css from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();
  const isMobile = useMobileMediaQuery();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { onAuthOpen } = useAuthModalContext();

  const handleAddRecipeBtn = () => {
    if (!isLoggedIn) {
      onAuthOpen('/recipe/add');
    } else {
      navigate('/recipe/add');
    }
  };

  return (
    <section className={css.hero}>
      <h1 className={css.title}>Improve Your Culinary Talents</h1>
      <p className={css.subtitle}>
        Amazing recipes for beginners in the world of cooking, enveloping you in
        the aromas and tastes of various cuisines.
      </p>
      <ButtonLink
        type="button"
        color="white"
        size="normal"
        onClick={handleAddRecipeBtn}
      >
        Add recipe
      </ButtonLink>
      <div>
        {[...Array(isMobile ? 2 : 4)].map((_, idx) => (
          <span key={idx} className={css.stroke}></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
