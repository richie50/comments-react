export const generateObject = (arr) => {
  const ret = arr.reduce((acc, currentValue, index) => {
    acc[currentValue] = currentValue;
    return acc;
  }, {});
  return ret;
};
