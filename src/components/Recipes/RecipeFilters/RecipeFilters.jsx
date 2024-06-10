import axios from "axios";
import SelectFilter from "components/Shared/SelectFilter/SelectFilter";
import { useEffect, useState } from "react";
import { ingredients, areas } from "temp/ingredients";
const RecipeFilters = () => {
  const [areas, setAreas] = useState((areas) => areas.map(area => ({ value: area._id.$oid, label: area.name }) );
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get('');
        console.log(response)
        setAreas(response.data);
      } catch (error) {
        console.error('Error fetching the ingredients:', error);
      }
    };

    fetchIngredients();
  }, [])
  const [selectedOptions, setSelectedOptions] = useState({
    ingredients: null,
    areas: null,
  });

  const handleChange = (option, { name }) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: option,
    }));
  };
  const options1 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
  ]
  const options2 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
  return (
    <div>
      <h1>Custom Select Component</h1>
      <SelectFilter
        name="ingredients"
        options={options1}
        onChange={handleChange}
        value={selectedOptions.ingredients}
        placeholder="ingredients"
      />
      <SelectFilter
        name="category"
        options={options2}
        onChange={handleChange}
        value={selectedOptions.category}
        placeholder="areas"
      />
    </div>
  );
};

export default RecipeFilters;