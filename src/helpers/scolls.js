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

export const scrollToElementHorizontally = (container, element) => {
  if (!container || !element) return;

  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const containerScrollLeft = container.scrollLeft;

  const scrollLeft =
    containerScrollLeft +
    (elementRect.left - containerRect.left) -
    containerRect.width / 2 +
    elementRect.width / 2;

  container.scrollTo({
    left: scrollLeft,
    behavior: 'smooth',
  });
};
