import SelectFilter from "components/Shared/SelectFilter/SelectFilter";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { areasData } from "temp/areas";
import { ingredientsData } from "temp/ingredients";

const RecipeFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const areas = useMemo(() => 
    areasData.map(area => ({ value: area._id.$oid, label: area.name })), 
    []
  );

  const ingredients = useMemo(() => 
    ingredientsData.map(ingredient => ({ value: ingredient._id.$oid, label: ingredient.name })), 
    []
  );

  const [selectedOptions, setSelectedOptions] = useState({
    ingredients: null,
    areas: null,
  });

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

    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [name]: option,
    }));
  };

  return (
    <div>
      <h1>Custom Select Component</h1>
      <SelectFilter
        name="ingredients"
        options={ingredients}
        onChange={handleChange}
        value={selectedOptions.ingredients}
        placeholder="ingredients"
      />
      <SelectFilter
        name="areas"
        options={areas}
        onChange={handleChange}
        value={selectedOptions.areas}
        placeholder="areas"
      />
    </div>
  );
};

export default RecipeFilters;