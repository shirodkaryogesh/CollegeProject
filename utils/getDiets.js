import { Diets } from "../dataset";

const seeIfRangeExsists = ({ totalCalories, gender }) => {
  const max = gender === "male" ? 3000 : 2400;
  const min = gender === "male" ? 1800 : 1200;

  if (+totalCalories < min || +totalCalories > max) {
    return false;
  } else {
    return true;
  }
};
