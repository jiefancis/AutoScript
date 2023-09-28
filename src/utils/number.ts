export const formatNumber = (number: number) => {
  if (number >= 1000) {
    const formattedNumber = Math.floor(number / 1000);
    return `${formattedNumber}k+`;
  }
  return number.toString();
};
