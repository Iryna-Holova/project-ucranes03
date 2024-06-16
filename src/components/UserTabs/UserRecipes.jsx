import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getOwnRecipes } from 'services/recipes';
import { showError } from 'helpers/notification';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import Empty from 'components/Shared/Empty/Empty';
import Pagination from 'components/Shared/Pagination/Pagination';

const UserRecipes = () => {
  const [params] = useSearchParams();
  const topElementRef = useRef(null);
  const [totalPages, setTotalPages] = useState(0);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = useCallback(async () => {
    try {
      const page = params.get('page') || 1;
      const { data } = await getOwnRecipes({ page });
      setRecipes(data.results);
      setTotalPages(data.totalPages);
    } catch (error) {
      showError(error);
    }
  }, [params]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <div>
      <h3 className="visually-hidden">Recipes</h3>
      {recipes.length === 0 ? (
        <Empty>
          Nothing has been added to your recipes list yet. Please browse our
          recipes and add your favorites for easy access in the future.
        </Empty>
      ) : (
        <ListItems>
          {recipes.map(recipe => (
            <RecipePreview
              key={recipe._id}
              recipe={recipe}
              update={fetchRecipes}
            />
          ))}
        </ListItems>
      )}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          topElementRef={topElementRef.current}
        />
      )}
    </div>
  );
};

export default UserRecipes;
