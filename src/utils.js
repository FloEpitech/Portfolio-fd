export const getImageUrl = (path) => {
  return new URL(`${import.meta.env.BASE_URL}assets/${path}`, import.meta.url).href;
};