import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import css from './Hero.module.css';

const Hero = () => {
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
        onClick={console.log}
      >
        Add recipe
      </ButtonLink>
      <div>
        <span className={css.stroke}></span>
        <span className={css.stroke}></span>
        <span className={css.stroke}></span>
        <span className={css.stroke}></span>
      </div>
    </section>
  );
};

export default Hero;
