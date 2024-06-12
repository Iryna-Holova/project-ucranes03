import SelectFilter from "components/Shared/SelectFilter/SelectFilter";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { areasData } from "temp/areas";
import { ingredientsData } from "temp/ingredients";

const RecipeFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const areas = areasData.map(area => ({ value: area._id, label: area.name }));
  const ingredients = ingredientsData.map(ingredient => ({ value: ingredient._id, label: ingredient.name }));

  const [ingredSelectionOption, setIngredSelectionOption] = useState(searchParams.get("ingredient"));
  const [areasSelectionOption, setAreasSelectionOption] = useState(searchParams.get("area"));

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

    if (name === "ingredient") {
      setIngredSelectionOption(option);
    } else if (name === "area") {
      setAreasSelectionOption(option);
    }
  };
  return (
    <div>
      <SelectFilter
        name="ingredient"
        options={ingredients}
        onChange={handleChange}
        value={ingredSelectionOption}
        placeholder="ingredients"
      />
      <SelectFilter
        name="area"
        options={areas}
        onChange={handleChange}
        value={areasSelectionOption}
        placeholder="areas"
      />
    </div>
  );
};

export default RecipeFilters;