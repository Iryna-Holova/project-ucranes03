import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'store/authSlice/thunks';
import { fetchIngredients } from 'store/ingredientsSlice/thunks';
import { fetchAreas } from 'store/areasSlice/thunks';
import { fetchTestimonials } from 'store/testimonialsSlice/thunk';
import { AuthModalProvider } from 'components/AuthModalContext';
import { selectIsRefreshing } from 'store/authSlice/selectors';
import SharedLayout from './SharedLayout';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const Categories = lazy(() => import('./Categories/Categories'));
const Recipes = lazy(() => import('./Recipes/Recipes'));
const RecipePage = lazy(() => import('pages/RecipePage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const UserPage = lazy(() => import('pages/UserPage'));
const UserRecipes = lazy(() => import('./UserTabs/UserRecipes'));
const Favorites = lazy(() => import('./UserTabs/Favorites'));
const Followers = lazy(() => import('./UserTabs/Followers'));
const Following = lazy(() => import('./UserTabs/Following'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchIngredients());
    dispatch(fetchAreas());
    dispatch(fetchTestimonials());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <AuthModalProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="" element={<HomePage />}>
            <Route index element={<Categories />} />
            <Route path="recipes" element={<Recipes />} />
          </Route>
          <Route path="recipe/:id" element={<RecipePage />} />
          <Route
            path="recipe/add"
            element={
              <PrivateRoute>
                <AddRecipePage />
              </PrivateRoute>
            }
          />
          <Route
            path="user/:id"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="recipes" replace />} />
            <Route path="recipes" element={<UserRecipes />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="followers" element={<Followers />} />
            <Route path="following" element={<Following />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthModalProvider>
  );
};

export default App;
