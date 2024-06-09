import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { EMAIL_REGEXP, MIN_PASSWORD } from 'constants/validation';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import icons from '../../images/icons.svg';
import css from './AuthModal.module.css';

const schema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .matches(EMAIL_REGEXP, 'Invalid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(MIN_PASSWORD, 'Password is too short'),
  })
  .required();

const SignInForm = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = data => console.log(data);

  const email = watch('email');
  const password = watch('password');
  const isFormFilled = email && password;

  return (
    <div>
      <h2 className={css.title}>Sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form} noValidate>
        <div className={css.inputs}>
          <div className={css.input_field}>
            {errors.email && (
              <span className={css.error}>{errors.email.message}</span>
            )}
            <input
              {...register('email')}
              type="email"
              placeholder="Email*"
              className={css.input}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </div>
          <div className={css.input_field}>
            {errors.password && (
              <span className={css.error}>{errors.password.message}</span>
            )}
            <input
              {...register('password')}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              className={css.input}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            <button
              type="button"
              onClick={() =>
                setIsPasswordVisible(isPasswordVisible => !isPasswordVisible)
              }
              className={css.input_button}
            >
              <svg width={18} height={18}>
                <use
                  href={`${icons}${
                    isPasswordVisible ? '#icon-eye' : '#icon-eye-off'
                  }`}
                />
              </svg>
            </button>
          </div>
        </div>
        <ButtonLink disabled={!isFormFilled} type="submit">
          Create
        </ButtonLink>
      </form>
      <span className={css.text}>
        Don't have an account?{' '}
        <button onClick={toggleForm} className={css.switch_button}>
          Create an account
        </button>
      </span>
    </div>
  );
};

export default SignInForm;
