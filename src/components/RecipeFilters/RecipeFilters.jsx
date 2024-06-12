import SelectFilter from "components/Shared/SelectFilter/SelectFilter";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectIngredientsOptions } from "store/ingredientsSlice/selectors";
import { selectAreasOptions } from "store/areasSlice/selectors";

const RecipeFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ingredientsOptions = useSelector(selectIngredientsOptions);
  const areasOptions = useSelector(selectAreasOptions);

  const handleChange = (option, { name }) => {
    setSearchParams(prevParams => {
      const newParams = new URLSearchParams(prevParams);
      if (option) {
        newParams.set(name, option.value);
      } else {
        newParams.delete(name);
      }
      return newParams;
    });
  };

  const getOptionFromValue = (options, value) => {
    return options.find(option => option.value === value) || null;
  };

  const selectedIngredient = getOptionFromValue(ingredientsOptions, searchParams.get("ingredient"));
  const selectedArea = getOptionFromValue(areasOptions, searchParams.get("area"));

  return (
    <div>
      <SelectFilter
        name="ingredient"
        options={ingredientsOptions}
        onChange={handleChange}
        value={selectedIngredient}
        placeholder="Ingredients"
      />
      <SelectFilter
        name="area"
        options={areasOptions}
        onChange={handleChange}
        value={selectedArea}
        placeholder="Areas"
      />
    </div>
  );
};

export default RecipeFilters;