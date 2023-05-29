const data = [
  {
    Monday: {
      breakfast: ["2 boiled eggs, 1 whole wheat toast, 1 small apple"],
      snack: ["1 small bowl of unsalted peanuts"],
      Lunch: [
        "1 cup brown rice, 1 cup mixed vegetables (broccoli, cauliflower, carrot, beans), 1 small bowl of lentils",
      ],
      Snack: ["1 cup sliced cucumbers with 2 tablespoons hummus"],
      Dinner: [
        "1 cup vegetable soup, 1 cup mixed vegetable salad with low-fat dressing, 1 small whole wheat bread roll",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 cup cooked oatmeal with 1/2 cup unsweetened almond milk, 1 small banana",
      ],
      snack: ["1 small apple with 1 tablespoon almond butter"],
      Lunch: [
        "1 cup quinoa salad (cooked quinoa, mixed vegetables, tofu, lemon juice), 1 small bowl of yogurt",
      ],
      Snack: ["1 cup cherry tomatoes with 1 ounce of low-fat cheese"],
      Dinner: [
        "1 cup mixed vegetables curry (eggplant, cauliflower, tomato, onion), 1 small bowl of brown rice",
      ],
    },
    Wednesday: {
      breakfast: [
        "1 cup vegetable omelette (spinach, mushroom, tomato), 1 small whole wheat toast",
      ],
      snack: ["1 small bowl of strawberries"],
      Lunch: [
        "1 cup mixed vegetable soup, 1 small bowl of lentils, 1 small whole wheat bread roll",
      ],
      Snack: ["1 small carrot with 2 tablespoons hummus"],
      Dinner: [
        "1 cup roasted mixed vegetables (bell peppers, zucchini, eggplant), 1 small bowl of brown rice",
      ],
    },
    Thursday: {
      breakfast: [
        "1 cup cooked oatmeal with 1/2 cup unsweetened almond milk, 1 small banana",
      ],
      snack: ["1 small bowl of unsalted almonds"],
      Lunch: [
        "1 cup mixed vegetables curry (carrot, beans, potato, tomato), 1 small bowl of brown rice",
      ],
      Snack: ["1 small apple with 1 tablespoon almond butter"],
      Dinner: [
        "1 cup mixed vegetable salad with low-fat dressing, 1 small whole wheat bread roll",
      ],
    },
    Friday: {
      breakfast: [
        "1 cup vegetable omelette (spinach, mushroom, tomato), 1 small whole wheat toast",
      ],
      snack: ["1 small bowl of unsalted pistachios"],
      Lunch: [
        "1 cup mixed vegetable soup, 1 small bowl of lentils, 1 small whole wheat bread roll",
      ],
      Snack: ["1 small orange"],
      Dinner: [
        "1 cup mixed vegetables curry (cauliflower, peas, onion, tomato), 1 small bowl of brown rice",
      ],
    },
    Saturday: {
      breakfast: [
        "1 cup cooked oatmeal with 1/2 cup unsweetened almond milk, 1 small banana",
      ],
      snack: ["1 small bowl of unsalted peanuts"],
      Lunch: [
        "1 cup mixed vegetable soup, 1 small bowl of lentils, 1 small whole wheat bread roll",
      ],
      Snack: ["1 small bowl of cherry tomatoes"],
      Dinner: [
        "1 cup mixed vegetables stir-fry (broccoli, carrot, bell peppers, onion), 1 small bowl of brown rice",
      ],
    },
    Sunday: {
      breakfast: [
        "1 cup vegetable omelette (spinach, mushroom, tomato), 1 small whole wheat toast",
      ],
      snack: ["1 small bowl of unsalted almonds"],
      Lunch: [
        "1 cup mixed vegetables curry (cauliflower, peas, onion, tomato), 1 small bowl of brown rice",
      ],
      Snack: ["1 small bowl of mixed berries"],
      Dinner: [
        "1 cup mixed vegetable soup, 1 small bowl of lentils, 1 small whole wheat bread roll",
      ],
    },
    level: 1,
    calories: 1800,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "2 small chapatis made with whole wheat flour,1 cup of boiled chana dal (Bengal gram) curry,1 small bowl of cucumber, tomato and onion salad,1 cup of skimmed milk",
      ],
      snack: ["1 medium-sized apple,10-12 almonds"],
      Lunch: [
        "1 cup of brown rice,1 cup of mixed vegetables (cauliflower, broccoli, carrots, and bell peppers) stir-fried with olive oil,1 small bowl of curd (low-fat)",
      ],
      Snack: ["1 small bowl of sprouts salad (moong dal),1 cup of green tea"],
      Dinner: [
        "2 small chapatis made with whole wheat flour,1 cup of palak paneer (spinach and cottage cheese curry),1 small bowl of cucumber, tomato, and onion salad,1 cup of buttermilk (low-fat)",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 cup of oatmeal cooked in water,1 small bowl of vegetable dalia (broken wheat) cooked with carrots, beans, and peas,1 small bowl of curd (low-fat)",
      ],
      snack: ["1 small bowl of mixed fruits (guava, papaya, and orange)"],
      Lunch: [
        "1 cup of quinoa salad (quinoa, cucumber, tomato, onion, and coriander leaves),1 small bowl of mixed vegetable soup (carrots, beans, and cabbage),1 small bowl of curd (low-fat)",
      ],
      Snack: ["1 small bowl of boiled corn kernels,1 cup of green tea"],
      Dinner: [
        "2 small chapatis made with whole wheat flour,1 cup of mixed vegetable curry (carrots, beans, and capsicum),1 small bowl of cucumber, tomato, and onion salad,1 cup of buttermilk (low-fat)",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small dosas made with brown rice and urad dal,1 small bowl of coconut chutney,1 small bowl of sambar",
      ],
      snack: ["1 medium-sized pear,10-12 almonds"],
      Lunch: [
        "1 cup of brown rice,1 cup of rajma (kidney bean) curry,1 small bowl of cucumber, tomato, and onion salad,1 small bowl of curd (low-fat)",
      ],
      Snack: [
        "1 small bowl of roasted chana dal (Bengal gram),1 cup of green tea",
      ],
      Dinner: [
        "2 small chapatis made with whole wheat flour,1 cup of methi aloo (fenugreek leaves and potato curry),1 small bowl of cucumber, tomato, and onion salad,1 cup of buttermilk (low-fat)",
      ],
    },
    Thursday: {
      breakfast: [
        "1 cup of vegetable upma (semolina cooked with vegetables),1 small bowl of curd (low-fat)",
      ],
      snack: ["1 small bowl of mixed fruits (apple, guava, and orange)"],
      Lunch: [
        "1 cup of brown rice,1 cup of bhindi masala (okra curry),1 small bowl of cucumber, tomato, and onion salad,1 small bowl of curd (low-fat)",
      ],
      Snack: ["1 small bowl of mixed sprouts salad,1 cup of green tea"],
      Dinner: [
        "2 small chapatis made with whole wheat flour,1 cup of mixed vegetable curry (cauliflower, beans, and peas),1 small bowl of cucumber, tomato, and onion salad,1 cup of buttermilk (low-fat)",
      ],
    },
    Friday: {
      breakfast: [
        "1 cup of vegetable poha (flattened rice cooked with vegetables),1 small bowl of curd (low-fat)",
      ],
      snack: ["1 small bowl of mixed fruits (kiwi, papaya, and grapes)"],
      Lunch: [
        "1 cup of brown rice,1 cup of chole (chickpea) curry,1 small bowl of cucumber, tomato, and onion salad,1 small bowl of curd (low-fat)",
      ],
      Snack: ["1 small bowl of roasted peanuts,1 cup of green tea"],
      Dinner: [
        "2 small chapatis made with whole wheat flour,1 cup of palak chole (spinach and chickpea curry),1 small bowl of cucumber, tomato, and onion salad,1 cup of buttermilk (low-fat)",
      ],
    },
    Saturday: {
      breakfast: [
        "2 small idlis made with brown rice and urad dal,1 small bowl of sambar,1 small bowl of coconut chutney",
      ],
      snack: ["1 small bowl of mixed fruits (banana, apple, and orange)"],
      Lunch: [
        "1 cup of brown rice,1 cup of mushroom and green peas curry,1 small bowl of cucumber, tomato, and onion salad,1 small bowl of curd (low-fat)",
      ],
      Snack: [
        "1 small bowl of roasted chana dal (Bengal gram),1 cup of green tea",
      ],
      Dinner: [
        "2 small chapatis made with whole wheat flour,1 cup of aloo gobi (potato and cauliflower curry),1 small bowl of cucumber, tomato, and onion salad,1 cup of buttermilk (low-fat)",
      ],
    },
    Sunday: {
      breakfast: [
        "1 cup of vegetable oats upma,1 small bowl of curd (low-fat)",
      ],
      snack: ["1 small bowl of mixed fruits (kiwi, papaya, and grapes)"],
      Lunch: [
        "1 cup of brown rice,1 cup of paneer bhurji (scrambled cottage cheese cooked with vegetables),1 small bowl of cucumber, tomato, and onion salad,1 small bowl of curd (low-fat)",
      ],
      Snack: ["1 small bowl of mixed sprouts salad,1 cup of green tea"],
      Dinner: [
        "2 small chapatis made with whole wheat flour,1 cup of mixed vegetable curry (carrots, beans, and capsicum),1 small bowl of cucumber, tomato, and onion salad,1 cup of buttermilk (low-fat)",
      ],
    },
    level: 1,
    calories: 1900,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "1 cup of low-fat milk with 2 slices of whole wheat bread (toasted) and 1 boiled egg",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of mixed vegetable curry (made with non-starchy vegetables like cauliflower, carrots, capsicum, etc.), and 1 bowl of salad with cucumber, tomatoes, and onions",
      ],
      Snack: ["1 cup of green tea with 2 digestive biscuits"],
      Dinner: [
        "1 cup of brown rice, 1 cup of lentil soup (dal), and 1 bowl of mixed vegetable salad",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 cup of low-fat yogurt with 1 sliced banana and 2 tablespoons of crushed nuts (almonds and walnuts)",
      ],
      snack: ["1 small pear"],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of paneer tikka (grilled cottage cheese with vegetables), and 1 bowl of salad with cucumber, tomatoes, and onions",
      ],
      Snack: [
        "1 cup of green tea with 1 small piece of dark chocolate (70% cocoa or higher)",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable curry, and 1 bowl of mixed vegetable salad",
      ],
    },
    Wednesday: {
      breakfast: [
        "1 cup of oatmeal cooked with low-fat milk and topped with 1 sliced apple and 2 tablespoons of crushed nuts (almonds and walnuts)",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of rajma (kidney bean curry), and 1 bowl of salad with cucumber, tomatoes, and onions",
      ],
      Snack: ["1 cup of green tea with 1 small bowl of sprouts"],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable soup, and 1 bowl of mixed vegetable salad",
      ],
    },
    Thursday: {
      breakfast: [
        "1 cup of low-fat yogurt with 1 sliced mango and 2 tablespoons of crushed nuts (almonds and walnuts)",
      ],
      snack: ["1 small peach"],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of chana masala (chickpea curry), and 1 bowl of salad with cucumber, tomatoes, and onions",
      ],
      Snack: [
        "1 cup of green tea with 1 small bowl of roasted chana (roasted chickpeas)",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable curry, and 1 bowl of mixed vegetable salad",
      ],
    },
    Friday: {
      breakfast: [
        "2 slices of whole wheat bread (toasted) with 1 cup of low-fat cottage cheese and 1 sliced tomato",
      ],
      snack: ["1 small pear"],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of mushroom and pea curry, and 1 bowl of salad with cucumber, tomatoes, and onions",
      ],
      Snack: [
        "1 cup of green tea with 1 small bowl of roasted makhana (fox nuts)",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of dal makhani (lentil curry), and 1 bowl of mixed vegetable salad",
      ],
    },
    Saturday: {
      breakfast: ["1 cup of low-fat milk with 1 bowl of muesli (low-sugar)"],
      snack: ["1 small orange"],
      Lunch: [
        " 2 chapatis made with whole wheat flour,1 cup of baingan bharta (roasted eggplant curry), and 1 bowl of salad with cucumber, tomatoes, and onions",
      ],
      Snack: ["1 cup of green tea with 1 small bowl of roasted peanuts"],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable curry, and 1 bowl of mixed vegetable salad",
      ],
    },
    Sunday: {
      breakfast: [
        "1 cup of low-fat yogurt with 1 sliced kiwi and 2 tablespoons of crushed nuts (almonds and walnuts)",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of palak paneer (spinach and cottage cheese curry), and 1 bowl of salad with cucumber, tomatoes, and onions",
      ],
      Snack: [
        "1 cup of green tea with 1 small bowl of roasted chana dal (split chickpeas)",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable soup, and 1 bowl of mixed vegetable salad",
      ],
    },
    level: 1,
    calories: 2000,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "1 cup of oats cooked in water with 1 small apple, cinnamon, and 1 tbsp of chopped almonds",
      ],
      snack: [
        "1 small bowl of mixed berries (strawberries, raspberries, and blueberries)",
      ],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of mixed vegetable curry (made with non-starchy vegetables like cauliflower, carrots, capsicum, etc.) and 1 bowl of mixed vegetable salad",
      ],
      Snack: [
        "1 small bowl of boiled chickpeas with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of palak paneer (spinach and cottage cheese) and 1 bowl of mixed vegetable salad",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 cup of low-fat yogurt with 1 small banana and 1 tbsp of chopped walnuts",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "2 small moong dal chilas (pancakes) made with moong dal and vegetables, 1 small bowl of low-fat raita and 1 bowl of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of roasted chana (gram) and 1 small pear"],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable curry (made with non-starchy vegetables like cauliflower, carrots, capsicum, etc.) and 1 bowl of mixed vegetable salad",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 scrambled eggs with 1 slice of whole wheat bread (toasted) and 1 cup of green tea",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of methi paneer (fenugreek and cottage cheese) and 1 bowl of mixed vegetable salad",
      ],
      Snack: [
        "1 small bowl of boiled soybeans with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of baingan bharta (eggplant curry) and 1 bowl of mixed vegetable salad",
      ],
    },
    Thursday: {
      breakfast: [
        "1 cup of oats cooked in water with 1 small peach, cinnamon, and 1 tbsp of chopped almonds",
      ],
      snack: [
        "1 small bowl of mixed berries (strawberries, raspberries, and blueberries)",
      ],
      Lunch: [
        "2 small moong dal chilas (pancakes) made with moong dal and vegetables, 1 small bowl of low-fat raita and 1 bowl of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of roasted peanuts and 1 small pear"],
      Dinner: [
        "1 cup of brown rice, 1 cup of chana masala (chickpea curry) and 1 bowl of mixed vegetable salad",
      ],
    },
    Friday: {
      breakfast: [
        "1 cup of low-fat yogurt with 1 small banana and 1 tbsp of chopped walnuts",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of mixed vegetable curry (made with non-starchy vegetables like cauliflower, carrots, capsicum, etc.) and 1 bowl of mixed vegetable salad",
      ],
      Snack: [
        "1 small bowl of boiled black chana (gram) with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mushroom masala and 1 bowl of mixed vegetable salad",
      ],
    },
    Saturday: {
      breakfast: [
        "1 cup of oats cooked in water with,1 small apple, cinnamon, and 1 tbsp of chopped almonds",
      ],
      snack: [
        "1 small bowl of mixed berries (strawberries, raspberries, and blueberries)",
      ],
      Lunch: [
        "2 chapatis made with whole wheat flour, 1 cup of palak paneer (spinach and cottage cheese) and 1 bowl of mixed vegetable salad",
      ],
      Snack: [
        "1 small bowl of boiled chickpeas with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        " 1 cup of brown rice, 1 cup of mixed vegetable curry (made with non-starchy vegetables like cauliflower, carrots, capsicum, etc.) and 1 bowl of mixed vegetable salad",
      ],
    },
    Sunday: {
      breakfast: [
        "2 scrambled eggs with 1 slice of whole wheat bread (toasted) and 1 cup of green tea",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 small moong dal chilas (pancakes) made with moong dal and vegetables, 1 small bowl of low-fat raita and 1 bowl of mixed vegetable salad",
      ],
      Snack: [
        "1 small bowl of boiled soybeans with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of baingan bharta (eggplant curry) and 1 bowl of mixed vegetable salad",
      ],
    },
    level: 1,
    calories: 2100,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "2 small whole wheat dosas with mint chutney and sambar, and 1 cup of green tea",
      ],
      snack: ["1 small pear"],
      Lunch: [
        "1 cup of brown rice, 1 cup of mixed vegetable curry (made with non-starchy vegetables like cauliflower, broccoli, and beans), and 1 small bowl of low-fat curd",
      ],
      Snack: [
        "1 small bowl of roasted chickpeas with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "2 small whole wheat rotis, 1 cup of paneer tikka (made with low-fat paneer and vegetables), and 1 small bowl of mixed vegetable salad",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small bowl of vegetable upma made with semolina and non-starchy vegetables, and 1 cup of green tea",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "2 small whole wheat rotis, 1 cup of mixed vegetable and tofu stir-fry, and 1 small bowl of low-fat curd",
      ],
      Snack: [
        "1 small bowl of boiled edamame beans with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable and dal soup, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Wednesday: {
      breakfast: [
        "1 small bowl of vegetable poha made with flattened rice and non-starchy vegetables, and 1 cup of green tea",
      ],
      snack: ["1 small banana"],
      Lunch: [
        "2 small whole wheat rotis, 1 cup of mixed vegetable and paneer curry, and 1 small bowl of low-fat curd",
      ],
      Snack: [
        "1 small bowl of boiled black chickpeas with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable and tofu soup, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable idli with coconut chutney, and 1 cup of green tea",
      ],
      snack: ["1 small guava"],
      Lunch: [
        "2 small whole wheat rotis, 1 cup of mixed vegetable and lentil soup, and 1 small bowl of low-fat curd",
      ],
      Snack: [
        "1 small bowl of roasted peanuts with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable and mushroom stir-fry, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Friday: {
      breakfast: [
        "1 small bowl of vegetable dalia (broken wheat) with non-starchy vegetables, and 1 cup of green tea",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 small whole wheat rotis, 1 cup of mixed vegetable and tofu curry, and 1 small bowl of low-fat curd",
      ],
      Snack: [
        "1 small bowl of boiled green peas with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable and paneer soup, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable uttapam with coconut chutney, and 1 cup of green tea",
      ],
      snack: ["1 small pear"],
      Lunch: [
        "2 small whole wheat rotis, 1 cup of mixed vegetable and lentil curry, and 1 small bowl of low-fat curd",
      ],
      Snack: ["1 small bowl of carrot sticks with hummus"],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable and tofu stir-fry, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Sunday: {
      breakfast: [
        "1 small bowl of vegetable uttapam with coconut chutney, and 1 cup of green tea",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "2 small whole wheat rotis, 1 cup of mixed vegetable and paneer curry, and 1 small bowl of low-fat curd",
      ],
      Snack: [
        "1 small bowl of boiled peanuts with diced cucumber, tomato, and onion",
      ],
      Dinner: [
        "1 cup of brown rice, 1 cup of mixed vegetable and dal soup, and 1 small bowl of mixed vegetable salad",
      ],
    },
    level: 1,
    calories: 2200,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "1 cup of oatmeal cooked with low-fat milk and topped with sliced almonds, berries, and a sprinkle of cinnamon.",
      ],
      snack: [" 1 medium-sized apple with 1 tablespoon of almond butter"],
      Lunch: [
        "2 whole wheat chapatis with 1 cup of mixed vegetable curry (made with low-fat yogurt instead of cream) and a side salad.",
      ],
      Snack: ["1 small bowl of roasted chickpeas"],
      Dinner: [
        "1 cup of cooked brown rice with 1 cup of mixed vegetable stir-fry and 1 small bowl of dal (lentil soup)",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 cup of plain Greek yogurt with 1/2 cup of mixed berries, 1 tablespoon of chia seeds, and a sprinkle of cinnamon.",
      ],
      snack: [
        " 1 small bowl of sliced cucumbers with 2 tablespoons of hummus.",
      ],
      Lunch: [
        "1 cup of cooked quinoa with 1 cup of mixed vegetable curry and a side salad.",
      ],
      Snack: ["1 small bowl of roasted peanuts"],
      Dinner: [
        " 2 whole wheat chapatis with 1 cup of mixed vegetable curry and 1 small bowl of dal",
      ],
    },
    Wednesday: {
      breakfast: [
        " 1 cup of vegetable upma (a traditional Indian breakfast made with semolina and vegetables) with a side of low-fat yogurt",
      ],
      snack: ["1 small bowl of sliced carrots with 2 tablespoons of tzatziki."],
      Lunch: [
        "2 whole wheat chapatis with 1 cup of mixed vegetable curry and a side salad",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas)"],
      Dinner: [
        "1 cup of cooked quinoa with 1 cup of mixed vegetable stir-fry and 1 small bowl of dal",
      ],
    },
    Thursday: {
      breakfast: [
        "2 slices of whole grain toast with 2 scrambled eggs and a side of sliced tomatoes.",
      ],
      snack: [
        "1 small bowl of sliced bell peppers with 2 tablespoons of hummus",
      ],
      Lunch: [
        "2 whole wheat chapatis with 1 cup of mixed vegetable curry and a side salad.",
      ],
      Snack: [" 1 small bowl of roasted almonds"],
      Dinner: [
        "1 cup of cooked brown rice with 1 cup of mixed vegetable stir-fry and 1 small bowl of dal.",
      ],
    },
    Friday: {
      breakfast: [
        "1 cup of vegetable oats upma (a variation of upma made with oats and vegetables) with a side of low-fat yogurt.",
      ],
      snack: [
        "1 small bowl of sliced cucumbers with 2 tablespoons of tzatziki.",
      ],
      Lunch: [
        "1 cup of cooked quinoa with 1 cup of mixed vegetable curry and a side salad.",
      ],
      Snack: ["1 small bowl of roasted pistachios"],
      Dinner: [
        " 2 whole wheat chapatis with 1 cup of mixed vegetable curry and 1 small bowl of dal.",
      ],
    },
    Saturday: {
      breakfast: [
        "1 cup of besan chilla (a pancake made with chickpea flour and vegetables) with a side of low-fat yogurt",
      ],
      snack: [
        "1 small bowl of sliced bell peppers with 2 tablespoons of hummus.",
      ],
      Lunch: [
        "2 whole wheat chapatis with 1 cup of mixed vegetable curry and a side salad.",
      ],
      Snack: ["1 small bowl of roasted peanuts."],
      Dinner: [
        "1 cup of cooked brown rice with 1 cup of mixed vegetable stir-fry and 1 small bowl of dal.",
      ],
    },
    Sunday: {
      breakfast: [
        "1 cup of vegetable poha (a traditional Indian breakfast made with flattened rice and vegetables) with a side of low-fat yogurt",
      ],
      snack: ["1 small bowl of sliced carrots with 2 tablespoons of tzatziki"],
      Lunch: [
        "1 cup of cooked quinoa with 1 cup of mixed vegetable curry and a side salad",
      ],
      Snack: [" 1 small bowl of roasted cashews"],
      Dinner: [
        "2 whole wheat chapatis with 1 cup of mixed vegetable curry and 1 small bowl of dal.",
      ],
    },
    level: 1,
    calories: 2300,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "1 cup of cooked oatmeal with 1 tbsp of chopped nuts and 1 tbsp of chia seeds, 1 small banana, and 1 cup of black coffee",
      ],
      snack: ["1 small apple"],
      Lunch: [
        " 2 small whole wheat chapatis, 1 cup of mixed vegetable curry, 1 small bowl of low-fat curd, and 1 cup of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of roasted chickpeas"],
      Dinner: [
        " 1 cup of cooked quinoa, 1 cup of mixed vegetable and lentil soup, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Tuesday: {
      breakfast: [
        "2 small whole wheat dosas with 1 cup of sambar and 1 small bowl of coconut chutney, and 1 cup of black coffee",
      ],
      snack: ["1 small pear"],
      Lunch: [
        "1 cup of brown rice, 1 cup of mixed vegetable and tofu stir fry, and 1 small bowl of low-fat curd",
      ],
      Snack: ["1 small bowl of roasted peanuts"],
      Dinner: [
        "1 cup of mixed vegetable and paneer curry, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small whole wheat idlis with 1 cup of coconut chutney and 1 small bowl of sambar, and 1 cup of black coffee",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable curry, 1 small bowl of low-fat curd, and 1 cup of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of roasted chana dal"],
      Dinner: [
        "1 cup of cooked brown rice, 1 cup of mixed vegetable and tofu soup, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Thursday: {
      breakfast: [
        "2 small whole wheat parathas with 1 small bowl of mixed vegetable raita, and 1 cup of black coffee",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "1 cup of quinoa and mixed vegetable salad, 1 small bowl of low-fat curd, and 1 small whole wheat roll",
      ],
      Snack: ["1 small bowl of roasted almonds"],
      Dinner: [
        "1 cup of mixed vegetable and paneer stir fry, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Friday: {
      breakfast: [
        "1 cup of cooked oatmeal with 1 tbsp of chopped nuts and 1 tbsp of flax seeds, 1 small banana, and 1 cup of black coffee",
      ],
      snack: ["1 small pear"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable and lentil curry, and 1 small bowl of low-fat curd",
      ],
      Snack: ["1 small bowl of roasted peanuts"],
      Dinner: [
        "1 cup of mixed vegetable and tofu soup, 1 small bowl of quinoa and mixed vegetable salad, and 1 small whole wheat roll",
      ],
    },
    Saturday: {
      breakfast: [
        "2 small whole wheat dosas with 1 cup of sambar and 1 small bowl of coconut chutney, and 1 cup of black coffee",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "1 cup of brown rice, 1 cup of mixed vegetable and tofu stir fry, and 1 small bowl of low-fat curd",
      ],
      Snack: ["1 small bowl of roasted chana dal"],
      Dinner: [
        "1 cup of mixed vegetable and paneer curry, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Sunday: {
      breakfast: [
        "2 small whole wheat idlis with 1 cup of coconut chutney and 1 small bowl of sambar, and 1 cup of black coffee",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable curry, 1 small bowl of low-fat curd, and 1 cup of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of roasted almonds"],
      Dinner: [
        "1 cup of cooked brown rice, 1 cup of mixed vegetable and tofu soup, and 1 small bowl of mixed vegetable salad",
      ],
    },
    level: 1,
    calories: 2400,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "1 cup of steel-cut oats cooked with almond milk, topped with 1/4 cup of fresh berries and a tablespoon of chopped walnuts.",
      ],
      snack: ["1 medium-sized apple and 1 small handful of almonds."],
      Lunch: [
        "2 multigrain chapatis, 1 cup of mixed vegetable curry (made with low-fat yogurt and spices), and 1 small bowl of cucumber and tomato salad.",
      ],
      Snack: ["1 small bowl of sprouted mung bean salad."],
      Dinner: [
        " cup of cooked brown rice, 1/2 cup of lentil dal, 1 cup of sautéed mixed vegetables (such as zucchini, bell pepper, and broccoli), and 1 small bowl of curd.",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 medium-sized moong dal chilla (pancake made with lentil flour), 1 small bowl of mint-coriander chutney, and 1 small bowl of fruit salad.",
      ],
      snack: [" 1 small bowl of roasted chana (chickpeas) with spices."],
      Lunch: [
        "2 multigrain chapatis, 1 cup of paneer makhani (made with low-fat yogurt and tomatoes), and 1 small bowl of mixed vegetable raita.",
      ],
      Snack: ["1 small bowl of sprouted moong dal salad."],
      Dinner: [
        " 1 cup of cooked quinoa, 1/2 cup of rajma (kidney beans), 1 cup of sautéed mixed vegetables (such as carrot, beetroot, and cauliflower), and 1 small bowl of curd.",
      ],
    },
    Wednesday: {
      breakfast: [
        " 1 cup of plain Greek yogurt, topped with 1/4 cup of fresh berries and 1 tablespoon of chopped walnuts.",
      ],
      snack: ["1 small bowl of roasted peanuts."],
      Lunch: [
        "2 multigrain chapatis, 1 cup of chana masala (made with low-fat yogurt and spices), and 1 small bowl of cucumber and onion salad.",
      ],
      Snack: ["1 small bowl of fruit salad."],
      Dinner: [
        "1 cup of cooked quinoa, 1/2 cup of green moong dal, 1 cup of sautéed mixed vegetables (such as eggplant, bell pepper, and onion), and 1 small bowl of curd.",
      ],
    },
    Thursday: {
      breakfast: [
        "1 medium-sized vegetable uttapam (thick pancake made with rice and lentil flour and topped with vegetables), 1 small bowl of coconut chutney, and 1 small bowl of fruit salad.",
      ],
      snack: ["1 small bowl of roasted chana dal."],
      Lunch: [
        "2 multigrain chapatis, 1 cup of palak paneer (spinach and cottage cheese curry made with low-fat yogurt), and 1 small bowl of mixed vegetable raita.",
      ],
      Snack: [" 1 small bowl of sprouted mung bean salad."],
      Dinner: [
        "1 cup of cooked brown rice, 1/2 cup of dal makhani (black lentil curry made with low-fat yogurt), 1 cup of sautéed mixed vegetables (such as carrot, green beans, and bell pepper), and 1 small bowl of curd..",
      ],
    },
    Friday: {
      breakfast: [
        "1 cup of vegetable dalia (broken wheat porridge), topped with 1/4 cup of fresh berries and 1 tablespoon of chopped almonds.",
      ],
      snack: ["1 small bowl of roasted peanuts."],
      Lunch: [
        "2 multigrain chapatis 1 cup of mixed vegetable curry (made with low-fat yogurt and spices), and 1 small bowl of cucumber and tomato salad.",
      ],
      Snack: ["1 small bowl of sprouted moong dal salad."],
      Dinner: [
        " 1 cup of cooked quinoa, 1/2 cup of chhole (chickpea curry made with low-fat yogurt and spices), 1 cup of sautéed mixed vegetables (such as zucchini, bell pepper, and broccoli), and 1 small bowl of curd.",
      ],
    },
    Saturday: {
      breakfast: [
        "1 medium-sized vegetable poha (flattened rice flakes cooked with vegetables and spices), 1 small bowl of coconut chutney, and 1 small bowl of fruit salad.",
      ],
      snack: ["1 small bowl of roasted chana."],
      Lunch: [
        " 2 multigrain chapatis, 1 cup of aloo gobi (cauliflower and potato curry made with low-fat yogurt and spices), and 1 small bowl of mixed vegetable raita.",
      ],
      Snack: ["1 small bowl of sprouted moong dal salad."],
      Dinner: [
        "1 cup of cooked brown rice, 1/2 cup of masoor dal (red lentil curry made with low-fat yogurt), 1 cup of sautéed mixed vegetables (such as carrot, beetroot, and onion), and 1 small bowl of curd.",
      ],
    },
    Sunday: {
      breakfast: [
        "1 cup of mixed vegetable upma (semolina cooked with vegetables and spices), 1 small bowl of mint-coriander chutney, and 1 small bowl of fruit salad.",
      ],
      snack: ["1 small bowl of roasted peanuts."],
      Lunch: [
        " 2 multigrain chapatis, 1 cup of bhindi masala (okra curry made with low-fat yogurt and spices), and 1 small bowl of cucumber and onion salad.",
      ],
      Snack: [" 1 small bowl of sprouted mung bean salad."],
      Dinner: [
        "1 cup of cooked quinoa, 1/2 cup of rajma (kidney beans), 1 cup of sautéed mixed vegetables (such as eggplant, bell pepper, and onion), and 1 small bowl of curd.",
      ],
    },
    level: 1,
    calories: 2500,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "2 small whole wheat dosas with mixed vegetable sambar, and 1 small bowl of mixed fruit",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable curry, and 1 small bowl of cucumber raita",
      ],
      Snack: ["1 small bowl of roasted chickpeas"],
      Dinner: [
        "1 cup of mixed lentil soup, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small bowl of vegetable and paneer (cottage cheese) omelette, 1 small whole wheat toast, and 1 small bowl of mixed fruit",
      ],
      snack: ["1 small pear"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable and paneer curry, and 1 small bowl of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of boiled peanuts"],
      Dinner: [
        "1 cup of mixed vegetable and tofu stir-fry, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small whole wheat idlis with mixed vegetable sambar, and 1 small bowl of mixed fruit",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable and chana (chickpea) curry, and 1 small bowl of cucumber raita",
      ],
      Snack: [" 1 small bowl of roasted almonds"],
      Dinner: [
        "1 cup of mixed vegetable and soybean curry, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable and mushroom stir-fry, 1 small whole wheat toast, and 1 small bowl of mixed fruit",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable and paneer (cottage cheese) curry, and 1 small bowl of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of roasted moong dal (mung bean)"],
      Dinner: [
        "1 cup of mixed lentil soup, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Friday: {
      breakfast: [
        "2 small whole wheat uttapams with mixed vegetable sambar, and 1 small bowl of mixed fruit",
      ],
      snack: ["1 small pear"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable and tofu curry, and 1 small bowl of cucumber raita",
      ],
      Snack: ["1 small bowl of boiled peanuts"],
      Dinner: [
        "1 cup of mixed vegetable and chana (chickpea) stir-fry, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable and paneer (cottage cheese) omelette, 1 small whole wheat toast, and 1 small bowl of mixed fruit",
      ],
      snack: ["1 small orange"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable and soybean curry, and 1 small bowl of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of roasted almonds"],
      Dinner: [
        "1 cup of mixed vegetable and chana (chickpea) stir-fry, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    Sunday: {
      breakfast: [
        "2 small whole wheat dosas with mixed vegetable sambar, and 1 small bowl of mixed fruit",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "2 small whole wheat chapatis, 1 cup of mixed vegetable and paneer (cottage cheese) curry, and 1 small bowl of mixed vegetable salad",
      ],
      Snack: ["1 small bowl of roasted moong dal (mung bean)"],
      Dinner: [
        "1 cup of mixed lentil soup, 2 small whole wheat chapatis, and 1 small bowl of mixed vegetable salad",
      ],
    },
    level: 1,
    calories: 2600,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "Oats porridge with nuts and seeds and unsweetened almond milk.",
      ],
      snack: [" A handful of roasted chana (chickpeas)."],
      Lunch: [
        "2 chapatis with vegetable curry, spinach and tomato salad with a dressing of olive oil and lemon juice.",
      ],
      Snack: [" A bowl of mixed fruits like guava, papaya, and apple."],
      Dinner: [
        " Brown rice with mixed vegetables, dal (lentils) and cucumber raita.",
      ],
    },
    Tuesday: {
      breakfast: ["Vegetable upma with a glass of low-fat buttermilk."],
      snack: ["A cup of roasted peanuts."],
      Lunch: [
        "2 chapatis with palak paneer (spinach and cottage cheese), cucumber and onion salad with a dressing of lemon juice and olive oil.",
      ],
      Snack: ["A bowl of sprouts salad."],
      Dinner: ["Quinoa salad with roasted vegetables and grilled paneer."],
    },
    Wednesday: {
      breakfast: [
        "Scrambled tofu with whole wheat bread and a glass of freshly squeezed orange juice.",
      ],
      snack: ["A small bowl of mixed berries."],
      Lunch: [
        "2 chapatis with mixed vegetable curry, carrot and beetroot salad with a dressing of olive oil and vinegar.",
      ],
      Snack: [
        "A cup of unsweetened Greek yogurt with a tablespoon of chia seeds.",
      ],
      Dinner: [
        " Dal makhani with a small bowl of brown rice and a mixed vegetable salad.",
      ],
    },
    Thursday: {
      breakfast: [
        "Masala omelette with whole wheat toast and a glass of low-fat milk.",
      ],
      snack: ["A small bowl of roasted makhana (fox nuts)."],
      Lunch: [
        "2 chapatis with bhindi (okra) masala, kachumber salad with a dressing of lemon juice and olive oil.",
      ],
      Snack: ["A small bowl of boiled sweet potato."],
      Dinner: [
        "Chickpea curry with a small bowl of brown rice and a mixed vegetable salad.",
      ],
    },
    Friday: {
      breakfast: ["Moong dal cheela (pancake) with a cup of green tea."],
      snack: ["A handful of roasted almonds."],
      Lunch: [
        "2 chapatis with mixed vegetable curry, cucumber and tomato salad with a dressing of olive oil and vinegar.",
      ],
      Snack: ["A small bowl of roasted pumpkin seeds."],
      Dinner: [
        "Stuffed capsicum with a small bowl of brown rice and a mixed vegetable salad.",
      ],
    },
    Saturday: {
      breakfast: [
        "Poha (flattened rice) with mixed vegetables and a glass of fresh orange juice.",
      ],
      snack: ["A small bowl of roasted chana dal."],
      Lunch: [
        "2 chapatis with baingan bharta (roasted eggplant), cucumber and onion salad with a dressing of lemon juice and olive oil.",
      ],
      Snack: ["A small bowl of mixed sprouts."],
      Dinner: [
        "A small bowl of mixed lentil soup with a small bowl of brown rice and a mixed vegetable salad.",
      ],
    },
    Sunday: {
      breakfast: ["Paneer paratha with a cup of masala chai."],
      snack: ["A small bowl of roasted peanuts."],
      Lunch: [
        "2 chapatis with mixed vegetable curry, mixed salad with a dressing of olive oil and vinegar.",
      ],
      Snack: ["A small bowl of sliced watermelon."],
      Dinner: [
        "Mixed vegetable stir fry with a small bowl of quinoa and a mixed vegetable salad.",
      ],
    },
    level: 1,
    calories: 2700,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "2 idlis with coconut chutney and sambar (made with lentils and vegetables)",
      ],
      snack: ["1 small apple"],
      Lunch: [
        "1 cup brown rice, 1 cup mixed vegetable curry (made with low GI vegetables like cauliflower, broccoli, and eggplant), and 1 cup low-fat yogurt",
      ],
      Snack: ["1 cup sliced carrots with hummus."],
      Dinner: [
        " 1 cup mixed lentil soup, 1 small whole wheat roti, 1 cup spinach saag (made with low-fat yogurt)",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 slice of whole wheat bread,1 cup of oatmeal with skimmed milk, 1 small bowl of blueberries",
      ],
      snack: [" 1 small bowl of roasted flaxseeds and 1 cup of green tea."],
      Lunch: [
        "1 cup of quinoa salad with vegetables, 1 small bowl of lentil soup, and 1 small bowl of mixed fruit",
      ],
      Snack: ["1 small bowl of roasted peanuts and 1 cup of chamomile tea."],
      Dinner: [
        "  2 whole wheat rotis, 1 cup of mushroom and green peas curry, and 1 small bowl of papaya.",
      ],
    },
    Wednesday: {
      breakfast: [
        " 1 cup of daliya (broken wheat) with skimmed milk, 1 small bowl of sliced strawberries,1 small bowl of blueberries.",
      ],
      snack: ["1 small bowl of roasted chana dal and 1 cup of green tea."],
      Lunch: [
        " 1 cup of brown rice, 1 cup of mixed vegetables curry, and 1 cup of yogurt.",
      ],
      Snack: [
        "1 small bowl of sliced cucumbers and carrots with hummus dip and 1 cup of chamomile tea.",
      ],
      Dinner: [
        "2 whole wheat rotis, 1 cup of paneer bhurji (scrambled paneer), and 1 small bowl of sliced kiwi",
      ],
    },
    Thursday: {
      breakfast: [
        " 2 whole wheat pancakes with sugar-free syrup, 1 small bowl of sliced oranges .",
      ],
      snack: ["1 small bowl of roasted chana and 1 cup of green tea."],
      Lunch: [
        "1 cup of quinoa salad with vegetables, 1 small bowl of lentil soup, and 1 small bowl of mixed fruit.",
      ],
      Snack: [" 1 small bowl of roasted peanuts and 1 cup of chamomile tea."],
      Dinner: [
        "2 whole wheat rotis, 1 cup of baingan bharta (eggplant curry), and 1 small bowl of sliced pineapple.",
      ],
    },
    Friday: {
      breakfast: [
        "1 cup of oatmeal with skimmed milk, 1 small bowl of blueberries,1 slice of whole wheat bread.",
      ],
      snack: ["1 small bowl of roasted flaxseeds and 1 cup of green tea."],
      Lunch: [
        "1 cup of brown rice, 1 cup of mixed vegetables curry, and 1 cup of yogurt.",
      ],
      Snack: ["1 small bowl of roasted chickpeas and 1 cup of chamomile tea."],
      Dinner: [
        " 2 whole wheat rotis, 1 cup of mushroom and green peas curry, and 1 small bowl of sliced watermelon",
      ],
    },
    Saturday: {
      breakfast: [
        "2 whole wheat pancakes with sugar-free syrup, 1 small bowl of sliced oranges,1 small bowl of blueberries .",
      ],
      snack: ["1 small bowl of roasted chana and 1 cup of green tea."],
      Lunch: [
        " 1 cup of lentil soup, 1 cup of mixed vegetable salad, and 1 small bowl of sliced guava",
      ],
      Snack: [" 1 small bowl of roasted peanuts and 1 cup of chamomile tea."],
      Dinner: [
        "2 whole wheat rotis, 1 cup of spinach and tofu curry, and 1 small bowl of sliced papaya.",
      ],
    },
    Sunday: {
      breakfast: [
        "1 cup of daliya (broken wheat) with skimmed milk, 1 small bowl of sliced strawberries.",
      ],
      snack: ["1 small bowl of roasted flaxseeds and 1 cup of green tea."],
      Lunch: [
        " 1 cup of brown rice, 1 cup of mixed vegetables curry, and 1 cup of yogurt.",
      ],
      Snack: [
        " 1 small bowl of sliced cucumbers and carrots with hummus dip and 1 cup of chamomile tea",
      ],
      Dinner: [
        " 2 whole wheat rotis, 1 cup of paneer tikka masala, and 1 small bowl of sliced kiwi.",
      ],
    },
    level: 1,
    calories: 2800,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "1 cup cooked oatmeal with 1 tablespoon chopped nuts and 1/2 cup fresh blueberries. 1 cup skim milk.",
      ],
      snack: ["1 small apple with 1 tablespoon almond butter."],
      Lunch: [
        "1 whole wheat pita bread stuffed with 1/2 cup hummus, sliced cucumbers, and 1/2 cup cherry tomatoes. 1 cup baby carrots.",
      ],
      Snack: ["1/2 cup Greek yogurt with 1/2 cup sliced strawberries."],
      Dinner: [
        "1 cup cooked brown rice with 1/2 cup steamed broccoli, 1/2 cup sautéed mushrooms, and 1/2 cup diced tofu. 1 small whole wheat dinner roll.",
      ],
    },
    Tuesday: {
      breakfast: [
        "2 scrambled eggs with 1 slice whole wheat toast and 1/2 cup sautéed spinach. 1 medium orange.",
      ],
      snack: ["1/2 cup edamame."],
      Lunch: [
        "1 large green salad with mixed vegetables, 1/2 cup chickpeas, 1/4 cup sunflower seeds, and 2 tablespoons balsamic vinaigrette dressing.",
      ],
      Snack: ["1 small banana with 1 tablespoon peanut butter."],
      Dinner: [
        "1 cup cooked quinoa with 1/2 cup roasted Brussels sprouts, 1/2 cup roasted sweet potatoes, and 1/2 cup sautéed tempeh.",
      ],
    },
    Wednesday: {
      breakfast: [
        "1 cup cooked steel-cut oats with 1/2 cup diced apples, 1 tablespoon chopped walnuts, and 1/2 cup skim milk.",
      ],
      snack: ["1 small pear with 1 string cheese."],
      Lunch: [
        "1 whole wheat wrap filled with 1/2 cup black beans, 1/4 cup shredded cheese, diced tomatoes, and 2 tablespoons salsa. 1 cup baby carrots.",
      ],
      Snack: ["1 small apple with 1/4 cup almonds."],
      Dinner: [
        "1 cup cooked lentils with 1/2 cup steamed green beans, 1/2 cup roasted butternut squash, and 1/2 cup sautéed paneer.",
      ],
    },
    Thursday: {
      breakfast: [
        "1 cup cooked quinoa with 1/2 cup fresh berries, 1 tablespoon chopped pecans, and 1/2 cup skim milk.",
      ],
      snack: ["1 small banana with 1 tablespoon almond butter."],
      Lunch: [
        "1 large green salad with mixed vegetables, 1/2 cup kidney beans, 1/4 cup pumpkin seeds, and 2 tablespoons balsamic vinaigrette dressing.",
      ],
      Snack: ["1 hard-boiled egg with 1 cup raw baby carrots."],
      Dinner: [
        "1 cup cooked brown rice with 1/2 cup steamed asparagus, 1/2 cup sautéed mushrooms, and 1/2 cup diced tofu. 1 small whole wheat dinner roll.",
      ],
    },
    Friday: {
      breakfast: [
        " 1 cup cooked steel-cut oats with 1/2 cup fresh blueberries, 1 tablespoon chopped almonds, and 1/2 cup skim milk.",
      ],
      snack: ["1 small orange with 1 string cheese."],
      Lunch: [
        "1 whole wheat wrap filled with 1/2 cup chickpeas, 1/4 cup shredded cheese, diced tomatoes, and 2 tablespoons hummus. 1 cup baby carrots.",
      ],
      Snack: ["1 small apple with 1/4 cup cashews."],
      Dinner: [
        "1 cup cooked quinoa with 1/2 cup roasted Brussels sprouts, 1/2 cup sautéed tempeh, and 1/2 cup roasted sweet potatoes.",
      ],
    },
    Saturday: {
      breakfast: [
        "1 cup cooked oatmeal with 1/2 cup fresh strawberries, 1 tablespoon chopped walnuts, and 1/2 cup skim milk.",
      ],
      snack: ["1 small pear with 1 tablespoon peanut butter."],
      Lunch: [
        "1 large green salad with mixed vegetables, 1/2 cup white beans, 1/4 cup sunflower seeds, and 2 tablespoons balsamic vinaigrette dressing.",
      ],
      Snack: ["1 small banana with 1/4 cup pistachios."],
      Dinner: [
        "1 cup cooked brown rice with 1/2 cup steamed broccoli, 1/2 cup sautéed mushrooms, and 1/2 cup diced tofu. 1 small whole wheat dinner roll.",
      ],
    },
    Sunday: {
      breakfast: [
        "1 cup cooked quinoa with 1/2 cup fresh raspberries, 1 tablespoon chopped pecans, and 1/2 cup skim milk.",
      ],
      snack: ["1 small apple with 1 string cheese."],
      Lunch: [
        "1 whole wheat wrap filled with 1/2 cup black beans, 1/4 cup shredded cheese, diced tomatoes, and 2 tablespoons salsa. 1 cup baby carrots.",
      ],
      Snack: ["1 small apple with 1/4 cup cashews."],
      Dinner: [
        "1 cup cooked lentils with 1/2 cup steamed green beans, 1/2 cup roasted butternut squash, and 1/2 cup sautéed paneer.",
      ],
    },
    level: 1,
    calories: 2900,
    gender: male,
  },
  {
    Monday: {
      breakfast: [
        "Vegetable omelet made with spinach, bell pepper, and mushrooms, served with a slice of whole wheat toast ",
      ],
      snack: ["Apple slices with almond butter"],
      Lunch: [
        "Chickpea salad with tomatoes, cucumbers, and feta cheese, dressed with olive oil and lemon juice",
      ],
      Snack: ["Carrot sticks with hummus"],
      Dinner: ["Grilled tofu with roasted broccoli and brown rice"],
    },
    Tuesday: {
      breakfast: ["Greek yogurt with berries and chopped nuts"],
      snack: ["Handful of almonds"],
      Lunch: [
        "Lentil soup with a side salad of mixed greens and cherry tomatoes",
      ],
      Snack: ["Sliced bell pepper with guacamole"],
      Dinner: ["Stir-fry of mixed vegetables with tofu and quinoa"],
    },
    Wednesday: {
      breakfast: ["Oatmeal with sliced banana and cinnamon"],
      snack: ["Raw vegetable sticks with tzatziki"],
      Lunch: [
        "Spinach and feta cheese stuffed portobello mushroom caps, served with a side of roasted sweet potatoes",
      ],
      Snack: ["Cottage cheese with sliced peaches"],
      Dinner: ["Grilled eggplant with a side of quinoa and mixed green salad"],
    },
    Thursday: {
      breakfast: [
        "Smoothie made with unsweetened almond milk, mixed berries, and chia seeds",
      ],
      snack: ["Raw vegetable sticks with hummus"],
      Lunch: ["Grilled halloumi cheese with a side of roasted root vegetables"],
      Snack: ["Apple slices with cashew butter"],
      Dinner: ["Stir-fry of mixed vegetables with tofu and quinoa"],
    },
    Friday: {
      breakfast: ["Avocado toast with a side of sliced tomatoes"],
      snack: ["Handful of walnuts"],
      Lunch: [
        "Spinach and feta cheese stuffed portobello mushroom caps, served with a side of roasted sweet potatoes",
      ],
      Snack: ["Raw vegetable sticks with tzatziki"],
      Dinner: ["Grilled zucchini and bell peppers with a side of brown rice"],
    },
    Saturday: {
      breakfast: ["Greek yogurt with mixed berries and granola"],
      snack: ["Carrot sticks with hummus"],
      Lunch: ["Vegetable curry with a side of brown rice"],
      Snack: ["Cottage cheese with sliced peaches"],
      Dinner: [
        "Grilled portobello mushroom burger with a side of mixed vegetables",
      ],
    },
    Sunday: {
      breakfast: ["Avocado toast with a side of sliced tomatoes"],
      snack: ["Handful of almonds"],
      Lunch: [
        "Mixed greens salad with grilled tofu and a side of roasted sweet potatoes",
      ],
      Snack: ["Sliced cucumber with guacamole"],
      Dinner: ["Baked sweet potato with a side of mixed vegetables and quinoa"],
    },
    level: 1,
    calories: 3000,
    gender: male,
  },
  {
    Monday: {
      breakfast: ["1 small bowl of vegetable oats upma"],
      snack: ["1 small apple"],
      Lunch: [
        " 1 small bowl of mixed vegetable salad with cucumber, tomato, and carrot, 2 small chapatis, 1 small bowl of lentil soup",
      ],
      Snack: ["1 small bowl of roasted chana"],
      Dinner: [
        " 1 small bowl of mixed vegetable curry with 1 small bowl of brown rice  ",
      ],
    },
    Tuesday: {
      breakfast: ["1 small bowl of vegetable dalia (broken wheat) upma"],
      snack: ["1 small orange (60 calories)"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and beetroot, 2 small chapatis, 1 small bowl of moong dal soup",
      ],
      Snack: ["1 small bowl of roasted peanuts"],
      Dinner: ["1 small bowl of spinach curry with 1 small bowl of brown rice"],
    },
    Wednesday: {
      breakfast: [
        "1 small bowl of vegetable poha (flattened rice) with peanuts ",
      ],
      snack: ["1 small pear"],
      Lunch: [
        " 1 small bowl of mixed vegetable salad with cucumber, tomato, and onion, 2 small chapatis, 1 small bowl of rajma (kidney beans) curry",
      ],
      Snack: [" 1 small bowl of roasted soybeans"],
      Dinner: [
        "1 small bowl of mixed vegetable curry with 1 small bowl of brown rice",
      ],
    },
    Thursday: {
      breakfast: ["1 small bowl of vegetable idli with coconut chutney"],
      snack: ["1 small guava"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and capsicum, 2 small chapatis, 1 small bowl of chana dal soup",
      ],
      Snack: [" 1 small bowl of roasted makhana (fox nuts)"],
      Dinner: [
        "1 small bowl of paneer (cottage cheese) curry with 1 small bowl of brown rice",
      ],
    },
    Friday: {
      breakfast: ["1 small bowl of vegetable uttapam with coconut chutney"],
      snack: ["1 small peach"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and radish, 2 small chapatis, 1 small bowl of matar paneer (peas and cottage cheese) curry",
      ],
      Snack: ["1 small bowl of roasted almonds"],
      Dinner: [
        "1 small bowl of mixed vegetable curry with 1 small bowl of brown rice",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable omelet with 1 small bowl of sprouts",
      ],
      snack: ["1 small banana"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and carrot, 2 small chapatis, 1 small bowl of moong dal khichdi (rice and lentil porridge)",
      ],
      Snack: ["1 small bowl of roasted walnuts"],
      Dinner: [
        "1 small bowl of palak paneer (spinach and cottage cheese) with 1 small bowl of brown rice",
      ],
    },
    Sunday: {
      breakfast: ["1 small bowl of vegetable dalia (broken wheat) khichdi"],
      snack: ["1 small pear"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and onion, 2 small chapatis, 1 small bowl of rajma (kidney beans) curry",
      ],
      Snack: ["1 small bowl of roasted peanuts"],
      Dinner: [
        "1 small bowl of mixed vegetable curry with 1 small bowl of brown rice",
      ],
    },
    level: 1,
    calories: 1200,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        "2 scrambled eggs (or tofu scramble) with 1 slice of whole wheat toast and 1 small apple ",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of blueberries ",
      ],
      Lunch: [
        " 1 small baked sweet potato topped with 1/4 cup of black beans, 1/4 cup of salsa, and 2 tablespoons of plain Greek yogurt ",
      ],
      Snack: ["1 small pear with 1 oz of almonds"],
      Dinner: [
        "1 cup of cooked quinoa with 1 cup of roasted vegetables (broccoli, carrots, and bell peppers), seasoned with garlic, onion, and lemon juice ",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small banana with 2 tablespoons of peanut butter and 1 slice of whole wheat toast",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of strawberries",
      ],
      Lunch: [
        " 2 cups of mixed greens with 1/2 cup of chickpeas, 1/4 cup of crumbled feta cheese, 1/4 avocado, and 1 tablespoon of olive oil and balsamic vinegar",
      ],
      Snack: ["1 small orange with 1 oz of walnuts"],
      Dinner: [
        "1 cup of cooked brown rice with 1/2 cup of steamed edamame, 1 cup of roasted vegetables (zucchini, yellow squash, and onions), and 1 tablespoon of low-sodium soy sauce",
      ],
    },
    Wednesday: {
      breakfast: [
        "1 cup of cooked oatmeal with 1 small apple, 1 tablespoon of chopped pecans, and 1 tablespoon of honey",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of raspberries",
      ],
      Lunch: [
        "1 small whole wheat pita stuffed with 1/2 cup of hummus, 1/2 cup of sliced cucumbers, and 1/4 cup of diced tomatoes",
      ],
      Snack: ["1 small peach with 1 oz of pistachios"],
      Dinner: [
        "1 cup of cooked quinoa with 1/2 cup of black beans, 1/2 cup of diced tomatoes, and 1 tablespoon of chopped cilantro",
      ],
    },
    Thursday: {
      breakfast: [
        "2 small pancakes made with 1/2 cup of whole wheat flour, 1/2 cup of unsweetened almond milk, and 1 egg (or flax egg), topped with 1/2 cup of mixed berries and 1 		tablespoon of pure maple syrup",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of sliced peaches",
      ],
      Lunch: [
        "1 small whole wheat wrap filled with 1/2 cup of hummus, 1/2 cup of mixed greens, 1/4 cup of diced tomatoes, and 1/4 avocado",
      ],
      Snack: ["1 small pear with 1 oz of cashews"],
      Dinner: [
        "1 cup of cooked brown rice with 1/2 cup of sautéed tofu, 1 cup of steamed broccoli, and 1 tablespoon of low-sodium soy sauce",
      ],
    },
    Friday: {
      breakfast: [
        "1 small banana with 1 tablespoon of almond butter and 1 slice of whole wheat toast",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of mixed berries",
      ],
      Lunch: [
        "2 cups of mixed greens with 1/2 cup of sliced cucumbers, 1/4 cup of crumbled feta cheese, 1/4 avocado, and 1 tablespoon ofolive oil and balsamic vinegar ",
      ],
      Snack: ["1 small apple with 1 oz of almonds"],
      Dinner: [
        " 1 cup of cooked quinoa with 1/2 cup of roasted butternut squash, 1/2 cup of black beans, and 1 tablespoon of chopped parsley",
      ],
    },
    Saturday: {
      breakfast: [
        "2 small whole wheat waffles with 1/2 cup of mixed berries and 1 tablespoon of pure maple syrup",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of sliced kiwi",
      ],
      Lunch: [
        "1 small whole wheat pita stuffed with 1/2 cup of hummus, 1/2 cup of mixed greens, 1/4 cup of diced tomatoes, and 1/4 avocado",
      ],
      Snack: ["1 small orange with 1 oz of walnuts"],
      Dinner: [
        "1 cup of cooked brown rice with 1/2 cup of roasted vegetables (cauliflower, bell peppers, and onions), 1/2 cup of steamed broccoli, and 1 tablespoon of low-sodium soy sauce",
      ],
    },
    Sunday: {
      breakfast: [
        "1 small apple with 2 tablespoons of peanut butter and 1 slice of whole wheat toast",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of blueberries",
      ],
      Lunch: [
        "1 small baked sweet potato topped with 1/2 cup of chickpeas, 1/4 cup of salsa, and 2 tablespoons of plain Greek yogurt",
      ],
      Snack: ["1 small pear with 1 oz of pistachios"],
      Dinner: [
        "1 cup of cooked quinoa with 1/2 cup of roasted vegetables (zucchini, yellow squash, and onions), 1/2 cup of diced tomatoes, and 1 tablespoon of chopped cilantro",
      ],
    },
    level: 1,
    calories: 1300,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        "2 small whole wheat dosas with 1 small bowl of sambar, 1 small bowl of coconut chutney, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (guava, watermelon, and kiwi)"],
      Lunch: [
        "1 small bowl of mixed vegetable soup, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with beetroot and carrot",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of cucumber raita, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small bowl of vegetable upma made with semolina and mixed vegetables, 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (apple, pear, and papaya)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of moong dal, 2 small whole wheat chapatis, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small vegetable uttapams, 1 small bowl of coconut chutney, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (pomegranate, orange, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of cucumber raita, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable poha made with flattened rice and mixed vegetables, 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (apple, pear, and papaya)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 2 small whole wheat chapatis, 1 small bowl of bhindi masala, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of chana masala, 2 small whole wheat chapatis, and 1 small bowl of salad with beetroot and carrot",
      ],
    },
    Friday: {
      breakfast: [
        "2 small moong dal chilas with 1 small bowl of tomato chutney, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (guava, watermelon, and kiwi)"],
      Lunch: [
        "1 small bowl of mixed vegetable soup, 2 small whole wheat chapatis, 1 small bowl of mushroom masala, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of dal makhani, 2 small whole wheat chapatis, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Saturday: {
      breakfast: [
        " 1 small bowl of vegetable idlis with 1 small bowl of sambar, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (pomegranate, orange, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with beetroot and carrot",
      ],
    },
    Sunday: {
      breakfast: [
        " 2 small whole wheat parathas with 1 small bowl of mixed vegetable raita, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (apple, pear, and papaya)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 2 small whole wheat chapatis, 1 small bowl of baingan bharta, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of chana masala, 2 small whole wheat chapatis, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    level: 1,
    calories: 1400,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        " 2 small whole wheat vegetable sandwiches with green chutney, and 1 cup of masala chai with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (guava, kiwi, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 1 small bowl of brown rice, 1 small bowl of vegetable raita, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (green gram) chaat with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with beetroot and carrot",
      ],
    },
    Tuesday: {
      breakfast: [
        "small bowl of vegetable upma with coconut chutney, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (orange, apple, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of chana masala, 2 small whole wheat chapatis, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small whole wheat vegetable parathas with 1 small bowl of mixed vegetable raita, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 2 small whole wheat chapatis, 1 small bowl of baingan bharta, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of mushroom masala, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable oats with 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (pomegranate, pear, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (green gram) chaat with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer tikka masala, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Friday: {
      breakfast: [
        "2 small whole wheat vegetable sandwiches with green chutney, and 1 cup of masala chai with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (guava, kiwi, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 1 small bowl of brown rice, 1 small bowl of vegetable raita, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas) with spices"],
      Dinner: [
        " 1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with beetroot and carrot ",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable upma with coconut chutney, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of mushroom curry, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Sunday: {
      breakfast: [
        "2 small whole wheat vegetable parathas with 1 small bowl of mixed vegetable raita, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (orange, apple, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 2 small whole wheat chapatis, 1 small bowl of bhindi masala, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (green gram) chaat with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of chana masala, 2 small whole wheat chapatis, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    level: 1,
    calories: 1500,
    gender: female,
  },
  {
    Monday: {
      breakfast: ["1 small bowl of sprouts chaat with lemon juice and spices"],
      snack: ["1 small bowl of sprouts chaat with lemon juice and spices"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small apple with 1 tablespoon of peanut butter"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of tofu bhurji, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small bowl of vegetable upma, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of boiled moong dal (mung beans) with lemon juice and spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: ["1 small bowl of roasted almonds"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer makhani, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small whole wheat vegetable parathas, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of mixed fruits (apple, orange, and berries)"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable oats porridge, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of roasted chana dal (split chickpeas) with spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal makhani, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Friday: {
      breakfast: [
        "1 small bowl of vegetable dalia (broken wheat), 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of roasted peanuts"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled rajma (kidney beans) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of matar paneer, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable idli with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of mushroom curry, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Sunday: {
      breakfast: [
        "1 small bowl of vegetable uttapam with tomato chutney, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: [
        "1 small bowl of roasted chana dal (split chickpeas) with spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of mixed fruits (banana, orange, and berries)"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal tadka, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    level: 1,
    calories: 1600,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        "2 small whole wheat dosas with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small bowl of mixed fruits (apple, pear, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of sprouts chaat with lemon juice and spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small bowl of vegetable upma with tomato chutney, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: [
        "1 small bowl of roasted chana dal (split chickpeas) with spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (split green gram) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal makhani, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small whole wheat methi parathas with low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small bowl of mixed fruits (banana, orange, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with carrot and beetroot",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        " 1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer tikka masala, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable poha with peanuts, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (apple, pear, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled rajma (kidney beans) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Friday: {
      breakfast: [
        "2 small whole wheat idlis with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of roasted chana dal (split chickpeas) with spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        " 1 small bowl of boiled moong dal (split green gram) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of chana masala, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable uttapam with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (banana, orange, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with carrot and beetroot",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Sunday: {
      breakfast: [
        "2 small whole wheat methi parathas with low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small bowl of mixed fruits (apple, pear, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled rajma (kidney beans) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal makhani, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    level: 1,
    calories: 1700,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        "2 small whole wheat dosas with coconut chutney and sambar, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (papaya, pineapple, and apple)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer tikka masala, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Tuesday: {
      breakfast: [
        "2 small whole wheat methi parathas with low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small bowl of mixed fruits (banana, orange, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (split green gram) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of chana masala, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Wednesday: {
      breakfast: [
        "1 small bowl of vegetable uttapam with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (apple, pear, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with carrot and beetroot",
      ],
      Snack: [
        "1 small bowl of boiled rajma (kidney beans) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal tadka, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Thursday: {
      breakfast: [
        " 2 small whole wheat idlis with coconut chutney and sambar, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (papaya, pineapple, and apple)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Friday: {
      breakfast: [
        "2 small whole wheat parathas with low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small bowl of mixed fruits (banana, orange, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (split green gram) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with carrot and beetroot ",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable poha with peanuts and curry leaves, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (apple, pear, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled rajma (kidney beans) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of chana masala, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Sunday: {
      breakfast: [
        "2 small whole wheat dosas with coconut chutney and sambar, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (papaya, pineapple, and apple)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with carrot and beetroot",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal tadka, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    level: 1,
    calories: 1800,
    gender: female,
  },
  {
    Monday: {
      breakfast: ["1 small bowl of vegetable oats upma"],
      snack: ["1 small apple"],
      Lunch: [
        " 1 small bowl of mixed vegetable salad with cucumber, tomato, and carrot, 2 small chapatis, 1 small bowl of lentil soup",
      ],
      Snack: ["1 small bowl of roasted chana"],
      Dinner: [
        " 1 small bowl of mixed vegetable curry with 1 small bowl of brown rice  ",
      ],
    },
    Tuesday: {
      breakfast: ["1 small bowl of vegetable dalia (broken wheat) upma"],
      snack: ["1 small orange (60 calories)"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and beetroot, 2 small chapatis, 1 small bowl of moong dal soup",
      ],
      Snack: ["1 small bowl of roasted peanuts"],
      Dinner: ["1 small bowl of spinach curry with 1 small bowl of brown rice"],
    },
    Wednesday: {
      breakfast: [
        "1 small bowl of vegetable poha (flattened rice) with peanuts ",
      ],
      snack: ["1 small pear"],
      Lunch: [
        " 1 small bowl of mixed vegetable salad with cucumber, tomato, and onion, 2 small chapatis, 1 small bowl of rajma (kidney beans) curry",
      ],
      Snack: [" 1 small bowl of roasted soybeans"],
      Dinner: [
        "1 small bowl of mixed vegetable curry with 1 small bowl of brown rice",
      ],
    },
    Thursday: {
      breakfast: ["1 small bowl of vegetable idli with coconut chutney"],
      snack: ["1 small guava"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and capsicum, 2 small chapatis, 1 small bowl of chana dal soup",
      ],
      Snack: [" 1 small bowl of roasted makhana (fox nuts)"],
      Dinner: [
        "1 small bowl of paneer (cottage cheese) curry with 1 small bowl of brown rice",
      ],
    },
    Friday: {
      breakfast: ["1 small bowl of vegetable uttapam with coconut chutney"],
      snack: ["1 small peach"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and radish, 2 small chapatis, 1 small bowl of matar paneer (peas and cottage cheese) curry",
      ],
      Snack: ["1 small bowl of roasted almonds"],
      Dinner: [
        "1 small bowl of mixed vegetable curry with 1 small bowl of brown rice",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable omelet with 1 small bowl of sprouts",
      ],
      snack: ["1 small banana"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and carrot, 2 small chapatis, 1 small bowl of moong dal khichdi (rice and lentil porridge)",
      ],
      Snack: ["1 small bowl of roasted walnuts"],
      Dinner: [
        "1 small bowl of palak paneer (spinach and cottage cheese) with 1 small bowl of brown rice",
      ],
    },
    Sunday: {
      breakfast: ["1 small bowl of vegetable dalia (broken wheat) khichdi"],
      snack: ["1 small pear"],
      Lunch: [
        "1 small bowl of mixed vegetable salad with cucumber, tomato, and onion, 2 small chapatis, 1 small bowl of rajma (kidney beans) curry",
      ],
      Snack: ["1 small bowl of roasted peanuts"],
      Dinner: [
        "1 small bowl of mixed vegetable curry with 1 small bowl of brown rice,",
      ],
    },
    level: 1,
    calories: 1900,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        "2 scrambled eggs (or tofu scramble) with 1 slice of whole wheat toast and 1 small apple ",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of blueberries ",
      ],
      Lunch: [
        " 1 small baked sweet potato topped with 1/4 cup of black beans, 1/4 cup of salsa, and 2 tablespoons of plain Greek yogurt ",
      ],
      Snack: ["1 small pear with 1 oz of almonds"],
      Dinner: [
        "1 cup of cooked quinoa with 1 cup of roasted vegetables (broccoli, carrots, and bell peppers), seasoned with garlic, onion, and lemon juice ",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small banana with 2 tablespoons of peanut butter and 1 slice of whole wheat toast",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of strawberries",
      ],
      Lunch: [
        " 2 cups of mixed greens with 1/2 cup of chickpeas, 1/4 cup of crumbled feta cheese, 1/4 avocado, and 1 tablespoon of olive oil and balsamic vinegar",
      ],
      Snack: ["1 small orange with 1 oz of walnuts"],
      Dinner: [
        "1 cup of cooked brown rice with 1/2 cup of steamed edamame, 1 cup of roasted vegetables (zucchini, yellow squash, and onions), and 1 tablespoon of low-sodium soy sauce",
      ],
    },
    Wednesday: {
      breakfast: [
        "1 cup of cooked oatmeal with 1 small apple, 1 tablespoon of chopped pecans, and 1 tablespoon of honey",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of raspberries",
      ],
      Lunch: [
        "1 small whole wheat pita stuffed with 1/2 cup of hummus, 1/2 cup of sliced cucumbers, and 1/4 cup of diced tomatoes",
      ],
      Snack: ["1 small peach with 1 oz of pistachios"],
      Dinner: [
        "1 cup of cooked quinoa with 1/2 cup of black beans, 1/2 cup of diced tomatoes, and 1 tablespoon of chopped cilantro",
      ],
    },
    Thursday: {
      breakfast: [
        "2 small pancakes made with 1/2 cup of whole wheat flour, 1/2 cup of unsweetened almond milk, and 1 egg (or flax egg), topped with 1/2 cup of mixed berries and 1 		tablespoon of pure maple syrup",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of sliced peaches",
      ],
      Lunch: [
        "1 small whole wheat wrap filled with 1/2 cup of hummus, 1/2 cup of mixed greens, 1/4 cup of diced tomatoes, and 1/4 avocado",
      ],
      Snack: ["1 small pear with 1 oz of cashews"],
      Dinner: [
        "1 cup of cooked brown rice with 1/2 cup of sautéed tofu, 1 cup of steamed broccoli, and 1 tablespoon of low-sodium soy sauce",
      ],
    },
    Friday: {
      breakfast: [
        "1 small banana with 1 tablespoon of almond butter and 1 slice of whole wheat toast",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of mixed berries",
      ],
      Lunch: [
        "2 cups of mixed greens with 1/2 cup of sliced cucumbers, 1/4 cup of crumbled feta cheese, 1/4 avocado, and 1 tablespoon ofolive oil and balsamic vinegar ",
      ],
      Snack: ["1 small apple with 1 oz of almonds"],
      Dinner: [
        " 1 cup of cooked quinoa with 1/2 cup of roasted butternut squash, 1/2 cup of black beans, and 1 tablespoon of chopped parsley",
      ],
    },
    Saturday: {
      breakfast: [
        "2 small whole wheat waffles with 1/2 cup of mixed berries and 1 tablespoon of pure maple syrup",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of sliced kiwi",
      ],
      Lunch: [
        "1 small whole wheat pita stuffed with 1/2 cup of hummus, 1/2 cup of mixed greens, 1/4 cup of diced tomatoes, and 1/4 avocado",
      ],
      Snack: ["1 small orange with 1 oz of walnuts"],
      Dinner: [
        "1 cup of cooked brown rice with 1/2 cup of roasted vegetables (cauliflower, bell peppers, and onions), 1/2 cup of steamed broccoli, and 1 tablespoon of low-sodium soy sauce",
      ],
    },
    Sunday: {
      breakfast: [
        "1 small apple with 2 tablespoons of peanut butter and 1 slice of whole wheat toast",
      ],
      snack: [
        "1 small container of non-fat Greek yogurt with 1/2 cup of blueberries",
      ],
      Lunch: [
        "1 small baked sweet potato topped with 1/2 cup of chickpeas, 1/4 cup of salsa, and 2 tablespoons of plain Greek yogurt",
      ],
      Snack: ["1 small pear with 1 oz of pistachios"],
      Dinner: [
        "1 cup of cooked quinoa with 1/2 cup of roasted vegetables (zucchini, yellow squash, and onions), 1/2 cup of diced tomatoes, and 1 tablespoon of chopped cilantro",
      ],
    },
    level: 1,
    calories: 2000,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        "2 small whole wheat dosas with 1 small bowl of sambar, 1 small bowl of coconut chutney, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (guava, watermelon, and kiwi)"],
      Lunch: [
        "1 small bowl of mixed vegetable soup, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with beetroot and carrot",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of cucumber raita, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small bowl of vegetable upma made with semolina and mixed vegetables, 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (apple, pear, and papaya)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of moong dal, 2 small whole wheat chapatis, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small vegetable uttapams, 1 small bowl of coconut chutney, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (pomegranate, orange, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of cucumber raita, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable poha made with flattened rice and mixed vegetables, 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (apple, pear, and papaya)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 2 small whole wheat chapatis, 1 small bowl of bhindi masala, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of chana masala, 2 small whole wheat chapatis, and 1 small bowl of salad with beetroot and carrot",
      ],
    },
    Friday: {
      breakfast: [
        "2 small moong dal chilas with 1 small bowl of tomato chutney, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (guava, watermelon, and kiwi)"],
      Lunch: [
        "1 small bowl of mixed vegetable soup, 2 small whole wheat chapatis, 1 small bowl of mushroom masala, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of dal makhani, 2 small whole wheat chapatis, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Saturday: {
      breakfast: [
        " 1 small bowl of vegetable idlis with 1 small bowl of sambar, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (pomegranate, orange, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with beetroot and carrot",
      ],
    },
    Sunday: {
      breakfast: [
        " 2 small whole wheat parathas with 1 small bowl of mixed vegetable raita, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (apple, pear, and papaya)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 2 small whole wheat chapatis, 1 small bowl of baingan bharta, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of chana masala, 2 small whole wheat chapatis, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    level: 1,
    calories: 2100,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        " 2 small whole wheat vegetable sandwiches with green chutney, and 1 cup of masala chai with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (guava, kiwi, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 1 small bowl of brown rice, 1 small bowl of vegetable raita, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (green gram) chaat with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with beetroot and carrot",
      ],
    },
    Tuesday: {
      breakfast: [
        "small bowl of vegetable upma with coconut chutney, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (orange, apple, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of chana masala, 2 small whole wheat chapatis, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small whole wheat vegetable parathas with 1 small bowl of mixed vegetable raita, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 2 small whole wheat chapatis, 1 small bowl of baingan bharta, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of mushroom masala, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable oats with 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small cup of mixed fruits (pomegranate, pear, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (green gram) chaat with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer tikka masala, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Friday: {
      breakfast: [
        "2 small whole wheat vegetable sandwiches with green chutney, and 1 cup of masala chai with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (guava, kiwi, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 1 small bowl of brown rice, 1 small bowl of vegetable raita, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of roasted chana (chickpeas) with spices"],
      Dinner: [
        " 1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with beetroot and carrot ",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable upma with coconut chutney, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of mushroom curry, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Sunday: {
      breakfast: [
        "2 small whole wheat vegetable parathas with 1 small bowl of mixed vegetable raita, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small cup of mixed fruits (orange, apple, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable dal, 2 small whole wheat chapatis, 1 small bowl of bhindi masala, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (green gram) chaat with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 1 small bowl of chana masala, 2 small whole wheat chapatis, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    level: 1,
    calories: 2200,
    gender: female,
  },
  {
    Monday: {
      breakfast: ["1 small bowl of sprouts chaat with lemon juice and spices"],
      snack: ["1 small bowl of sprouts chaat with lemon juice and spices"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small apple with 1 tablespoon of peanut butter"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of tofu bhurji, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small bowl of vegetable upma, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of boiled moong dal (mung beans) with lemon juice and spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: ["1 small bowl of roasted almonds"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer makhani, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small whole wheat vegetable parathas, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of mixed fruits (apple, orange, and berries)"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable oats porridge, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of roasted chana dal (split chickpeas) with spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal makhani, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Friday: {
      breakfast: [
        "1 small bowl of vegetable dalia (broken wheat), 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of roasted peanuts"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        "1 small bowl of boiled rajma (kidney beans) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of matar paneer, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable idli with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 1 small bowl of brown rice, 1 small bowl of salad with cucumber and tomato, and 1 small bowl of low-fat yogurt",
      ],
      Snack: ["1 small bowl of roasted makhana (foxnuts) with spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of mushroom curry, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Sunday: {
      breakfast: [
        "1 small bowl of vegetable uttapam with tomato chutney, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: [
        "1 small bowl of roasted chana dal (split chickpeas) with spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of mixed fruits (banana, orange, and berries)"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal tadka, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    level: 1,
    calories: 2300,
    gender: female,
  },
  {
    Monday: {
      breakfast: [
        "2 small whole wheat dosas with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small bowl of mixed fruits (apple, pear, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: ["1 small bowl of sprouts chaat with lemon juice and spices"],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Tuesday: {
      breakfast: [
        "1 small bowl of vegetable upma with tomato chutney, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: [
        "1 small bowl of roasted chana dal (split chickpeas) with spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled moong dal (split green gram) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal makhani, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Wednesday: {
      breakfast: [
        "2 small whole wheat methi parathas with low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small bowl of mixed fruits (banana, orange, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with carrot and beetroot",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        " 1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer tikka masala, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Thursday: {
      breakfast: [
        "1 small bowl of vegetable poha with peanuts, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (apple, pear, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled rajma (kidney beans) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of palak paneer, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    Friday: {
      breakfast: [
        "2 small whole wheat idlis with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: [
        "1 small bowl of roasted chana dal (split chickpeas) with spices",
      ],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cucumber and tomato",
      ],
      Snack: [
        " 1 small bowl of boiled moong dal (split green gram) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of chana masala, and 1 small bowl of salad with cabbage and carrots",
      ],
    },
    Saturday: {
      breakfast: [
        "1 small bowl of vegetable uttapam with coconut chutney, 1 small bowl of low-fat yogurt, and 1 cup of masala tea with low-fat milk and stevia",
      ],
      snack: ["1 small bowl of mixed fruits (banana, orange, and berries)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with carrot and beetroot",
      ],
      Snack: [
        "1 small bowl of boiled chana (chickpeas) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of paneer bhurji, and 1 small bowl of salad with cucumber and tomato",
      ],
    },
    Sunday: {
      breakfast: [
        "2 small whole wheat methi parathas with low-fat yogurt, and 1 cup of green tea with stevia",
      ],
      snack: ["1 small bowl of mixed fruits (apple, pear, and grapes)"],
      Lunch: [
        "1 small bowl of mixed vegetable curry, 2 small whole wheat chapatis, 1 small bowl of brown rice, and 1 small bowl of salad with cabbage and carrots",
      ],
      Snack: [
        "1 small bowl of boiled rajma (kidney beans) with lemon juice and spices",
      ],
      Dinner: [
        "1 small bowl of mixed vegetable sabzi, 2 small whole wheat chapatis, 1 small bowl of dal makhani, and 1 small bowl of salad with carrot and beetroot",
      ],
    },
    level: 1,
    calories: 2400,
    gender: female,
  },
];
