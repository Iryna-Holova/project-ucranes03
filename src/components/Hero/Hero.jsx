import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';

const Hero = () => {
  return (
    <section>
      <h1>Improve Your Culinary Talents</h1>
      <p>
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
    </section>
  );
};

export default Hero;
