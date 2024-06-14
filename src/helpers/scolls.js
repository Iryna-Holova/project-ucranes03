export const scrollToElement = element => {
  if (!element) return;

  const rect = element.getBoundingClientRect();
  const isInViewport =
    rect.top >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight);

  if (!isInViewport) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
