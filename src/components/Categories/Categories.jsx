import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import CategoryList from './CategoryList/CategoryList';

const Categories = () => {
  return (
    <>
      <MainTitle>Categories</MainTitle>
      <Subtitle section="categories">
        Discover a limitless world of culinary possibilities and enjoy exquisite
        recipes that combine taste, style and the warm atmosphere of the
        kitchen.
      </Subtitle>
      <CategoryList />
    </>
  );
};

export default Categories;
