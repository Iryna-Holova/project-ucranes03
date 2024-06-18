import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const DEFAULT_ERROR = 'Something went wrong!';
iziToast.settings({
  timeout: 5000,
  resetOnHover: true,
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  backgroundColor: 'var(--color-bg)',
  maxWidth: 600,
});

function showError({ message = DEFAULT_ERROR } = {}) {
  iziToast.show({
    overlayClose: true,
    progressBarColor: 'var(--color-error)',
    messageColor: 'var(--color-error)',

    message,
  });
}

export { showError };
