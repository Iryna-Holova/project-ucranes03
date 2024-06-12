import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import icons from '../../images/icons.svg';
import css from './AddRecipeForm.module.css';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import Select from 'react-select';
import {useSelector} from "react-redux";
import {selectCategories, selectCategoriesOptions} from "../../redux/categoriesSlice/selectors.js"



const ingredients = [
  { value: 'sugar', label: 'Sugar' },
  { value: 'flour', label: 'Flour' },
  { value: 'butter', label: 'Butter' },
];

const customStyles = {
  control: provided => ({
    ...provided,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '188px',
    borderRadius: '30px',
    border: '1px solid var(--color-main-12, rgba(5, 5, 5, 0.12))',
    width: '100%',
    marginTop: '8px',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'var(--color-main-60, rgba(5, 5, 5, 0.60))',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.4',
    letterSpacing: '-0.02em',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  }),
  menu: provided => ({
    ...provided,
    color: 'var(--color-main-60, rgba(5, 5, 5, 0.60))',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.4',
    letterSpacing: '-0.02em',
  }),
};

const AddRecipeForm = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [cookingTime, setCookingTime] = useState(0);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [countLength, setCountLength] = useState(0);
  const categories = useSelector(selectCategories);
//   const ingredient = useSelector(selectIngredients);
// console.log(ingredient)
console.log(categories)
  
  const {
    register,
    handleSubmit,
    control,
    formState,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();

  const onSubmit = data => {
    if (ingredientsList.length === 0) {
      alert('Please add at least one ingredient');
      return;
    }
    data.cookingTime = cookingTime;
    data.ingredients = ingredientsList;
    console.log(data);
  };

  const handleAddTime = () => {
    setCookingTime(prevTime => prevTime + 10);
  };

  const handleMinusTime = () => {
    setCookingTime(prevTime => (prevTime > 0 ? prevTime - 10 : 0));
  };

  const handleFileChange = evt => {
    const file = evt.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleDescription = evt => {
    const { value } = evt.target;
    setCountLength(value.length);
  };

  const handleAddIngredients = () => {
    const ingredient = getValues('ingredients');
    const quantity = getValues('quantity');
    if (ingredient && quantity) {
      setIngredientsList(prev => [...prev, { ingredient, quantity }]);
      setValue('quantity', '');
      setValue('ingredients', '');
    } else {
      alert('Please select an ingredient and enter a quantity');
    }
  };

  const handleDelete = () => {
    reset();
    setPreviewImage(null);
    setCookingTime(0);
    setIngredientsList([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.boxForm}>
        <div className={css.boxFile}>
          {previewImage ? (
            <label style={{ display: 'none' }}>
              <svg className={css.iconCamera}>
                <use href={`${icons}#icon-camera`}></use>
              </svg>
              <input
                className={css.inputFile}
                {...register('photo', {
                  required: 'photo is required',
                  onChange: handleFileChange,
                })}
                type="file"
              />
            </label>
          ) : (
            <label>
              <svg className={css.iconCamera}>
                <use href={`${icons}#icon-camera`}></use>
              </svg>
              <input
                className={css.inputFile}
                {...register('photo', {
                  required: 'photo is required',
                  onChange: handleFileChange,
                })}
                type="file"
              />
            </label>
          )}

          {previewImage && (
            <img
              className={css.photoFile}
              src={previewImage}
              alt="Preview"
              width="100"
            />
          )}
        </div>
        {errors.photo && (
          <span className={css.errorMessage}>{errors.photo.message}</span>
        )}
        <div>
          <div className={css.boxNameCateIngr}>
            <div className={css.boxInputName}>
              <input
                placeholder="The name of the recipe"
                className={css.inputName}
                type="text"
                {...register('name', {
                  required: 'Name is required for recipe',
                })}
              />
              {errors.name && (
                <span className={css.errorMessage}>{errors.name.message}</span>
              )}
              <div className={css.boxDescription}>
                <input
                  className={css.inputDescription}
                  {...register('description', {
                    required: 'Description is required',
                    maxLength: {
                      value: 200,
                      message: 'Description should not exceed 200 characters',
                    },
                    onChange: handleDescription,
                  })}
                  placeholder="Enter a description of the dish"
                  type="text"
                />
                {errors.description && (
                  <span className={css.errorMessage}>
                    {errors.description.message}
                  </span>
                )}
                <span className={css.textLength}>{`${countLength}/200`}</span>
              </div>
            </div>
            <div className={css.boxTimeCategories}>
              <div className={css.boxSelectCat}>
                <label className={css.titleDescription}>Category</label>
                <Controller
                  rules={{ required: 'Categoty is required' }}
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder="Select a category"
                      styles={customStyles}
                      {...field}
                      options={categories}
                    />
                  )}
                />
                {errors.category && (
                  <span className={css.errorMessage}>
                    {errors.category.message}
                  </span>
                )}
              </div>
              <div>
                <label className={css.titleDescription}>COOKING TIME</label>
                <div className={css.boxTimeBtn}>
                  <button
                    className={css.BtnTime}
                    onClick={handleMinusTime}
                    type="button"
                  >
                    <svg className={css.iconTime}>
                      <use href={`${icons}#icon-minus`}></use>
                    </svg>
                  </button>
                  <span className={css.counterTime}>{cookingTime} min</span>
                  <button
                    className={css.BtnTime}
                    onClick={handleAddTime}
                    type="button"
                  >
                    <svg className={css.iconTime}>
                      <use href={`${icons}#icon-plus`}></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={css.boxIngredients}>
              <label className={css.titleDescription}>Ingredients</label>
              <Controller
                rules={{ required: 'Ingredients and quantity is required' }}
                name="ingredients"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Add the ingredient"
                    styles={customStyles}
                    {...field}
                    options={ingredients}
                  />
                )}
              />
              <input
                className={css.inputQuantity}
                {...register('quantity', { required: 'Quantity is required' })}
                type="text"
                placeholder="Enter quantity"
              />
              {errors.ingredients && errors.quantity && (
                <span className={css.errorMessage}>
                  {errors.ingredients.message}
                </span>
              )}
            </div>
          </div>
          <ButtonLink
            type="button"
            color="secondary"
            size="normal"
            onClick={handleAddIngredients}
          >
            <span>Add ingredient</span>
            <svg>
              <use href={`${icons}#icon-plus`} />
            </svg>
          </ButtonLink>
          <ul className={css.listIngredients}>
            <li></li>
          </ul>
          <div>
            <label className={css.titleDescription}>Recipe Preparation</label>
            <textarea
              className={css.inputPreparation}
              {...register('preparation', {
                required: 'Preparation is required',
                maxLength: {
                  value: 200,
                  message: 'Preparation should not exceed 200 characters',
                },
              })}
              placeholder="Enter recipe"
            ></textarea>
            {errors.preparation && (
              <span className={css.errorMessage}>
                {errors.preparation.message}
              </span>
            )}
          </div>
          <div className={css.boxBtnDelPub}>
            <button onClick={handleDelete} className={css.deleteBtn}>
              <svg className={css.btnDelete}>
                <use href={`${icons}#icon-trash`}></use>
              </svg>
            </button>
            <ButtonLink type="submit" color="primary" size="large">
              Publish
            </ButtonLink>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddRecipeForm;
