import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import icons from '../../images/icons.svg';
import css from './AddRecipeForm.module.css';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesOptions } from 'store/categoriesSlice/selectors';
import {
  selectIngredients,
  selectIngredientsOptions,
} from 'store/ingredientsSlice/selectors';
import { selectAreasOptions } from 'store/areasSlice/selectors';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Ingredient from 'components/Shared/Ingredient/Ingredients';
import { addRecipe } from 'services/recipes';
import { showError } from 'helpers/notification';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from 'store/categoriesSlice/thunks';
import { customStyles } from 'components/Shared/SelectFilter/customStyles';

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
    .max(2500, 'Instructions should not exceed 2500 characters'),
  time: yup
    .number()
    .required('Time is required')
    .min(1, 'Time should be at least 1 minute'),
});

const AddRecipeForm = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [countLength, setCountLength] = useState(0);
  const categories = useSelector(selectCategoriesOptions);
  const ingredients = useSelector(selectIngredientsOptions);
  const areas = useSelector(selectAreasOptions);
  const ingredientAddList = useSelector(selectIngredients);
  const [ingregientsForList, setIngregientsForList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [categories.length, dispatch]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
    reset,
    trigger,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      time: 0,
    },
  });

  const onSubmit = async data => {
    if (ingredientsList.length === 0) {
      alert('Please add at least one ingredient');
      return;
    }
    data.ingredients = ingredientsList;
    data.category = data.category.value;
    data.area = data.area.value;
    delete data.measure;
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('area', data.area);
    formData.append('instructions', data.instructions);
    formData.append('thumb', data.thumb[0]);
    formData.append('time', data.time);
    ingredientsList.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][id]`, ingredient.id);
      formData.append(`ingredients[${index}][measure]`, ingredient.measure);
    });
    try {
      await addRecipe(formData);
      navigate('/user/current');
    } catch (error) {
      showError(error);
    }
  };

  const handleAddTime = () => {
    setValue('time', getValues('time') + 10);
    trigger('time');
  };

  const handleCloseIngredient = _id => {
    setIngredientsList(prev =>
      prev.filter(ingredient => ingredient.id !== _id)
    );
    setIngregientsForList(prev =>
      prev.filter(ingredient => ingredient._id !== _id)
    );
  };

  const handleMinusTime = () => {
    const newTime = getValues('time') > 10 ? getValues('time') - 10 : 0;
    setValue('time', newTime);
    trigger('time');
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
      const result = ingredientAddList.find(
        ing => ing._id === ingredient.value
      );
      if (result) {
        const newIngredient = { ...result, measure: measure };
        setIngregientsForList(prev => [...prev, newIngredient]);
      }
      setValue('measure', '');
      setValue('ingredients', null);
      await trigger('ingredientsList');
    } else {
      alert('Please select an ingredient and enter a measure');
    }
  };

  const handleDelete = () => {
    clearErrors();
    reset();
    setPreviewImage(null);
    setIngredientsList([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.box_form}>
        <div className={`${css.box_file} ${errors.thumb && css.input_error}`}>
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
            <label className={css.label_photo_icon}>
              <svg className={css.icon_camera}>
                <use href={`${icons}#icon-camera`}></use>
              </svg>
              <span className={css.text_photo_add}>Upload a photo</span>
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
          {errors.thumb && (
            <span className={css.error_file}>{errors.thumb.message}</span>
          )}
        </div>

        <div className={css.boxInputsForm}>
          <div className={css.box_name_cate_ingr}>
            <div className={css.box_input_name}>
              <div className={css.boxError}>
                <input
                  placeholder={
                    errors.title
                      ? 'Name is required enter name your recipe'
                      : 'The name of the recipe'
                  }
                  className={`${css.input_name} ${
                    errors.title ? css.input_error : ''
                  }`}
                  type="text"
                  {...register('title')}
                />
              </div>

              <div className={css.box_description}>
                <input
                  maxLength={200}
                  className={`${css.input_description} ${
                    errors.description && css.input_error
                  }`}
                  {...register('description', {
                    onChange: handleDescription,
                  })}
                  placeholder={
                    errors.description
                      ? 'Description is required,enter your description'
                      : 'Enter a description of the dish'
                  }
                  type="text"
                />

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
                      placeholder={
                        errors.category
                          ? 'Category is required,pick category'
                          : 'Select a category'
                      }
                      styles={customStyles}
                      {...field}
                      options={categories}
                    />
                  )}
                />
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
                  <span
                    className={`${css.counter_time} ${
                      errors.time && css.error_message
                    }`}
                  >
                    {getValues('time')} min
                  </span>
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
                {errors.time && (
                  <span className={css.error_message}>Time is required</span>
                )}
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
              <div className={css.boxIngredQuan}>
                <div className={css.box_input_ingredients}>
                  {' '}
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
                </div>
                <div className={css.box_input_quantity}>
                  {' '}
                  <input
                    className={css.input_quantity}
                    {...register('measure')}
                    type="text"
                    placeholder="Enter quantity"
                  />
                </div>
              </div>
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
            {ingregientsForList.length > 0 &&
              ingregientsForList.map(({ img, name, measure, _id }) => (
                <Ingredient
                  _id={_id}
                  callback={handleCloseIngredient}
                  key={_id}
                  img={img}
                  name={name}
                  measure={measure}
                />
              ))}
          </ul>
          <div className={css.box_preparation}>
            <label className={css.title_description}>Recipe Preparation</label>
            <textarea
              className={`${css.input_preparation} ${
                errors.instructions ? css.input_error : ''
              }`}
              {...register('instructions')}
              placeholder={
                errors.instructions
                  ? 'Preparation is required,enter preparation'
                  : 'Enter recipe'
              }
            ></textarea>
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
