import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EMAIL_REGEXP, MIN_PASSWORD } from 'constants/validation';
import { loginUser } from 'store/authSlice/thunks';
import { selectIsLoading, selectIsLoggedIn } from 'store/authSlice/selectors';
import { useAuthModalContext } from 'components/AuthModalContext';
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

const SignInForm = () => {
  const { path, onToggleMode, onAuthClose, isSignUp } = useAuthModalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      onAuthClose();
      path && navigate(path);
    }
  }, [isLoggedIn, navigate, onAuthClose, path]);

  useEffect(() => {
    if (!isSignUp) {
      setTimeout(() => {
        setFocus('email');
      }, 300);
    }
  }, [isSignUp, setFocus]);

  const onSubmit = data => {
    dispatch(loginUser(data));
  };

  const email = watch('email');
  const password = watch('password');
  const isFormFilled = email && password;

  return (
    <div className={`${css.signin_wrapper} ${!isSignUp ? css.is_active : ''}`}>
      <h2 id="modal-title" className={css.title}>
        Sign in
      </h2>
      <p id="modal-description" className="visually-hidden">
        Sign in
      </p>
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
              onClick={() => {
                setIsPasswordVisible(isPasswordVisible => !isPasswordVisible);
                setFocus('password');
              }}
              aria-label="Toggle password visibility"
              className={css.input_button}
            >
              <svg
                width={18}
                height={18}
                className={`${css.button_icon} ${
                  isPasswordVisible ? css.visible : ''
                }`}
              >
                <use href={`${icons}#icon-eye`} />
              </svg>{' '}
              <svg
                width={18}
                height={18}
                className={`${css.button_icon} ${
                  !isPasswordVisible ? css.visible : ''
                }`}
              >
                <use href={`${icons}#icon-eye-off`} />
              </svg>
            </button>
          </div>
        </div>
        <ButtonLink type="submit" disabled={!isFormFilled || isLoading}>
          {isLoading ? 'Loading...' : 'Sign in'}
        </ButtonLink>
      </form>
      <span className={css.text}>
        Don't have an account?{' '}
        <button
          onClick={onToggleMode}
          className={css.switch_button}
          type="button"
        >
          Create an account
        </button>
      </span>
    </div>
  );
};

export default SignInForm;
