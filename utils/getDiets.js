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

export const getDiets = ({ gender, totalCalories, level, foodType }) => {
  const dataExists = seeIfRangeExsists({ totalCalories, gender });

  if (dataExists) {
    const getType = Diets[`level${level}`][gender];
    const keys = Object.keys(getType);
    let Gotkey = null;
    for (let i = 1; i < keys.length; i++) {
      if (+totalCalories <= +keys[i]) {
        Gotkey = +keys[i];
        break;
      }
    }
    const findDiet = getType[Gotkey][foodType];
    return {
      data: findDiet,
      isError: false,
      message: "Data exists",
    };
  } else {
    return {
      data: null,
      isError: true,
      message: "No data found in given range",
    };
  }
};
