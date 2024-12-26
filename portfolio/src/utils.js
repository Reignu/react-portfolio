// Function to use assets images
export const getImageUrl = (path) => {
  return new URL(`/portfolio/assets/${path}`,  import.meta.url).href;
};