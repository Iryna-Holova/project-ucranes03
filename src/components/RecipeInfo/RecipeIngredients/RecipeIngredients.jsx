const RecipeIngredients = ({ ingredients = [] }) => {
  return (
    <div>
      <h3>ingredients</h3>
      <ul>
        {ingredients.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
