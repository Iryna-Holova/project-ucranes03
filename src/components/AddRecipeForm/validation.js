import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  thumb: yup
    .mixed()
    .required('Photo is required')
    .test('fileType', 'Unsupported File Format', value => {
      return value && value[0]?.type.split('/')[0] === 'image';
    }),
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must have at least 3 symbols')
    .max(30),
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
  ingredients: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required('Ingredient is required'),
        measure: yup.string().required('Measure is required'),
      })
    )
    .test(
      'length',
      'Recipe must have minimum 1 igredient',
      arr => arr.length > 0
    ),
  instructions: yup
    .string()
    .required('Instructions are required')
    .max(2500, 'Instructions should not exceed 2500 characters'),
  time: yup
    .number()
    .required('Time is required')
    .min(1, 'Time should be at least 1 minute'),
});

export const resolver = yupResolver(schema);
