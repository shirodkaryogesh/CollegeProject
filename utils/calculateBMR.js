export const calculateBMR = ({ weight, height, age, gender }) => {
  const genderValue = () => {
    if (gender === "male") {
      return 5;
    } else {
      return -161;
    }
  };
  return 10 * +weight + 6.25 * +height - 5 * +age + genderValue();
};
