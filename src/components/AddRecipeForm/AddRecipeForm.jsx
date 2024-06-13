import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import icons from '../../images/icons.svg';
import css from './AddRecipeForm.module.css';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { selectCategoriesOptions } from 'store/categoriesSlice/selectors';
import { selectIngredientsOptions } from 'store/ingredientsSlice/selectors';
import { selectAreasOptions } from 'store/areasSlice/selectors';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  thumb: yup
    .mixed()
    .required('Photo is required')
    .test('fileType', 'Unsupported File Format', value => {
      return (
        value &&
        value[0] &&
        ['image/jpeg', 'image/png', 'image/gif'].includes(value[0].type)
      );
    }),
  title: yup.string().required('Title is required'),
  description: yup
    .string()
    .required('Description is required')
    .max(200, 'Description should not exceed 200 characters'),
  category: yup
    .object()
    .shape({
      value: yup.string().required('Category is required'),
    })
    .required('Category is required'),
  area: yup
    .object()
    .shape({
      value: yup.string().required('Area is required'),
    })
    .required('Area is required'),
  ingredientsList: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required('Ingredient is required'),
        measure: yup.string().required('Measure is required'),
      })
    )
    .min(1, 'At least one ingredient is required'),
  instructions: yup
    .string()
    .required('Instructions are required')
    .max(200, 'Instructions should not exceed 200 characters'),
});
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
  const categories = useSelector(selectCategoriesOptions);
  const ingredients = useSelector(selectIngredientsOptions);
  const areas = useSelector(selectAreasOptions);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
    reset,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    if (ingredientsList.length === 0) {
      alert('Please add at least one ingredient');
      return;
    }
    data.cookingTime = cookingTime;
    data.ingredients = ingredientsList;
    data.category = data.category.value;
    data.area = data.area.value;
    delete data.measure;
  };
  console.log(errors);
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

  const handleAddIngredients = async () => {
    const ingredient = getValues('ingredients');
    const measure = getValues('measure');
    if (ingredient && measure) {
      setIngredientsList(prev => [...prev, { id: ingredient.value, measure }]);
      setValue('measure', '');
      setValue('ingredients', null);
      await trigger('ingredientsList');
    } else {
      alert('Please select an ingredient and enter a measure');
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
      <div className={css.box_form}>
        <div className={css.box_file}>
          {previewImage ? (
            <label style={{ display: 'none' }}>
              <svg className={css.icon_camera}>
                <use href={`${icons}#icon-camera`}></use>
              </svg>
              <input
                className={css.input_file}
                {...register('thumb', {
                  onChange: handleFileChange,
                })}
                type="file"
              />
            </label>
          ) : (
            <label>
              <svg className={css.icon_camera}>
                <use href={`${icons}#icon-camera`}></use>
              </svg>
              <input
                className={css.input_file}
                {...register('thumb', {
                  onChange: handleFileChange,
                })}
                type="file"
              />
            </label>
          )}

          {previewImage && (
            <img
              className={css.photo_file}
              src={previewImage}
              alt="Preview"
              width="100"
            />
          )}
        </div>
        {errors.photo && (
          <span className={css.error_message}>{errors.photo.message}</span>
        )}
        <div>
          <div className={css.box_name_cate_ingr}>
            <div className={css.box_input_name}>
              <input
                placeholder="The name of the recipe"
                className={css.input_name}
                type="text"
                {...register('title')}
              />
              {errors.name && (
                <span className={css.error_message}>{errors.name.message}</span>
              )}
              <div className={css.box_description}>
                <input
                  className={css.input_description}
                  {...register('description', {
                    onChange: handleDescription,
                  })}
                  placeholder="Enter a description of the dish"
                  type="text"
                />
                {errors.description && (
                  <span className={css.error_message}>
                    {errors.description.message}
                  </span>
                )}
                <span className={css.text_length}>{`${countLength}/200`}</span>
              </div>
            </div>
            <div className={css.box_time_categories}>
              <div className={css.box_select_cat}>
                <label className={css.title_description}>Category</label>
                <Controller
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
                  <span className={css.error_message}>
                    {errors.category.message}
                  </span>
                )}
              </div>
              <div>
                <label className={css.title_description}>COOKING TIME</label>
                <div className={css.box_time_btn}>
                  <button
                    className={css.btn_time}
                    onClick={handleMinusTime}
                    type="button"
                  >
                    <svg className={css.icon_time}>
                      <use href={`${icons}#icon-minus`}></use>
                    </svg>
                  </button>
                  <span className={css.counter_time}>{cookingTime} min</span>
                  <button
                    className={css.btn_time}
                    onClick={handleAddTime}
                    type="button"
                  >
                    <svg className={css.icon_time}>
                      <use href={`${icons}#icon-plus`}></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={css.box_area}>
              <label className={css.title_description}>Area</label>
              <Controller
                name="area"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Pick area"
                    styles={customStyles}
                    {...field}
                    options={areas}
                  />
                )}
              />
            </div>
            <div className={css.box_ingredients}>
              <label className={css.title_description}>Ingredients</label>
              <Controller
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
                className={css.input_quantity}
                {...register('measure')}
                type="text"
                placeholder="Enter quantity"
              />
              {errors.ingredients && errors.quantity && (
                <span className={css.error_message}>
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
          <ul className={css.list_ingredients}>
            <li></li>
          </ul>
          <div>
            <label className={css.title_description}>Recipe Preparation</label>
            <textarea
              className={css.input_preparation}
              {...register('instructions')}
              placeholder="Enter recipe"
            ></textarea>
            {errors.preparation && (
              <span className={css.error_message}>
                {errors.preparation.message}
              </span>
            )}
          </div>
          <div className={css.box_btn_del_pub}>
            <button onClick={handleDelete} className={css.delete_btn}>
              <svg className={css.btn_delete}>
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