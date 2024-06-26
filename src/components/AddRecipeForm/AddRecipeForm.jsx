import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchIngredients } from 'store/ingredientsSlice/thunks';
import { fetchAreas } from 'store/areasSlice/thunks';
import { fetchCategories } from 'store/categoriesSlice/thunks';
import { selectAreasOptions } from 'store/areasSlice/selectors';
import { selectCategoriesOptions } from 'store/categoriesSlice/selectors';
import {
  selectIngredients,
  selectIngredientsOptions,
} from 'store/ingredientsSlice/selectors';

import { addRecipe } from 'services/recipes';
import { showError } from 'helpers/notification';
import { resolver } from './validation';

import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import Ingredient from 'components/Shared/Ingredient/Ingredients';
import { customStyles } from 'components/Shared/SelectFilter/customStyles';

import icons from 'images/icons.svg';
import css from './AddRecipeForm.module.css';
import { selectUser } from 'store/authSlice/selectors';

const TIME_STEP = 5;

const AddRecipeForm = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [countLength, setCountLength] = useState(0);
  const [ingregientsForList, setIngregientsForList] = useState([]);
  const { id: currentUserId } = useSelector(selectUser);

  const categories = useSelector(selectCategoriesOptions);
  const ingredients = useSelector(selectIngredientsOptions);
  const areas = useSelector(selectAreasOptions);
  const ingredientAddList = useSelector(selectIngredients);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [categories.length, dispatch]);

  useEffect(() => {
    if (!ingredients.length) {
      dispatch(fetchIngredients());
    }
  }, [dispatch, ingredients.length]);

  useEffect(() => {
    if (!areas.length) {
      dispatch(fetchAreas());
    }
  }, [dispatch, areas.length]);

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
    resolver,
    defaultValues: {
      thumb: null,
      title: '',
      description: '',
      instructions: '',
      area: null,
      time: 0,
      ingredients: [],
      ingredient: null,
      measure: '',
    },
  });

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category.value);
    formData.append('area', data.area.value);
    formData.append('instructions', data.instructions);
    formData.append('thumb', data.thumb[0]);
    formData.append('time', data.time);
    data.ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][id]`, ingredient.id);
      formData.append(`ingredients[${index}][measure]`, ingredient.measure);
    });

    try {
      await addRecipe(formData);
      navigate(`/user/${currentUserId}`);
    } catch (error) {
      showError(error);
    }
  };

  const handleCloseIngredient = async _id => {
    const arrIngedients = getValues('ingredients');

    setValue(
      'ingredients',
      arrIngedients.filter(({ id }) => id !== _id)
    );
    setIngregientsForList(prev =>
      prev.filter(ingredient => ingredient._id !== _id)
    );
    await trigger('ingredients');
  };

  const handleAddTime = () => {
    setValue('time', getValues('time') + TIME_STEP);
    trigger('time');
  };

  const handleMinusTime = () => {
    const newTime =
      getValues('time') > TIME_STEP ? getValues('time') - TIME_STEP : 0;
    setValue('time', newTime);
    trigger('time');
  };

  const handleFileChange = evt => {
    const file = evt.target.files[0];
    if (file.type.split('/')[0] !== 'image') {
      showError(new Error('Unsupported file format'));
      evt.target.value = '';
      return;
    }
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDescription = evt => {
    const { value } = evt.target;
    setCountLength(value.length);
  };

  const handleAddIngredients = async () => {
    const ingredient = getValues('ingredient');
    const measure = getValues('measure');

    if (ingredient && measure) {
      const arrIngedients = getValues('ingredients');
      if (arrIngedients.find(({ id }) => ingredient.value === id)) {
        return showError({ message: 'This ingredien is already added' });
      }

      setValue('ingredients', [
        ...arrIngedients,
        { id: ingredient.value, measure },
      ]);

      const result = ingredientAddList.find(
        ing => ing._id === ingredient.value
      );
      setIngregientsForList(prev => [...prev, { ...result, measure }]);

      setValue('measure', '');
      setValue('ingredient', null);

      await trigger('ingredients');
    } else {
      showError({
        message: 'Please select an ingredient and enter a measure',
      });
    }
  };

  const handleDelete = evt => {
    reset();
    setPreviewImage(null);
    setIngregientsForList([]);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className={css.box_form}>
        <div className={`${css.box_file} ${errors.thumb && css.input_error}`}>
          {previewImage ? (
            <label className={css.btn_another_photo}>
              Upload another photo
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
            <img className={css.photo_file} src={previewImage} alt="Preview" />
          )}
          {errors.thumb && (
            <span className={css.error_file}>{errors.thumb.message}</span>
          )}
        </div>

        <div className={css.boxInputsForm}>
          <div className={css.box_name_cate_ingr}>
            <div className={css.box_input_name}>
              <div className={css.input_wrapper}>
                {errors.title && (
                  <span className={css.error}>{errors.title.message}</span>
                )}
                <input
                  name="title"
                  placeholder={'The name of the recipe'}
                  className={`${css.input_name}`}
                  type="text"
                  {...register('title')}
                />
              </div>

              <div className={css.box_description}>
                {errors.description && (
                  <span className={css.error}>
                    {errors.description.message}
                  </span>
                )}
                <textarea
                  rows={2}
                  name="description"
                  maxLength={200}
                  className={`${css.input_description} ${
                    errors.description ? css.error_message : ''
                  }`}
                  {...register('description', {
                    onChange: handleDescription,
                  })}
                  placeholder="Enter a description of the dish"
                  type="text"
                />

                <span className={css.text_length}>{`${countLength}/200`}</span>
              </div>
            </div>
            <div className={css.box_time_categories}>
              <div className={css.box_select_cat}>
                <label className={css.title_description}>Category</label>
                {errors.category && (
                  <span className={css.error}>
                    {errors.category.value
                      ? errors.category.value.message
                      : errors.category.message}
                  </span>
                )}
                <Controller
                  className={css.select}
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Select
                      isClearable
                      placeholder="Select a category"
                      styles={customStyles(errors.category)}
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
              {errors.area && (
                <span className={css.error}>{errors.area.message}</span>
              )}
              <Controller
                className={css.select}
                name="area"
                control={control}
                render={({ field }) => (
                  <Select
                    isClearable
                    placeholder="Pick area"
                    styles={customStyles(errors.area)}
                    {...field}
                    options={areas}
                  />
                )}
              />
            </div>

            <div className={css.box_ingredients}>
              <label className={css.title_description}>Ingredients</label>
              <div className={css.boxIngredQuan}>
                {errors.ingredients && (
                  <span className={css.error}>
                    {errors.ingredients.message}
                  </span>
                )}
                <div className={css.box_input_ingredients}>
                  <Controller
                    name="ingredient"
                    control={control}
                    render={({ field }) => (
                      <Select
                        isClearable
                        placeholder="Add the ingredient"
                        styles={customStyles(errors.ingredients)}
                        {...field}
                        options={ingredients}
                      />
                    )}
                  />
                </div>

                <div className={css.box_input_quantity}>
                  <input
                    name="measure"
                    className={`${css.input_quantity}  ${
                      errors.ingredients ? css.input_error : ''
                    }`}
                    {...register('measure', { required: 'Input measure' })}
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
            {errors.instructions && (
              <span className={css.error}>{errors.instructions.message}</span>
            )}
            <textarea
              name="instructions"
              className={`${css.input_preparation}`}
              {...register('instructions')}
              placeholder="Enter recipe"
            ></textarea>
          </div>

          <div className={css.box_btn_del_pub}>
            <button
              type="button"
              onClick={handleDelete}
              className={css.delete_btn}
            >
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
