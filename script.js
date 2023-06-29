const geographyQuestions = [
    "This a picture of what map?",
    "What state is highlighted?",
    "How many oceans are there in the world?",
    "What ocean is highlighted on the map?",
    "What country is highlighted on the map?",
    "How many contients exist?",
    "What continent is highlighted on the map?"
  ];

  const geographyChoices = [
    ["Canada", "Asia", "D.C", "World Map"],
    ["Virginia", "Maryland", "D.C", "Delware"],
    [2, 3, 4, 5],
    ["Pacific Ocean", "Indian Ocean", "Altantic Ocean", "Arctic Ocean"],
    ["Mexico", "USA", "Laos", "Morocco"],
    [10, 21, 7, 9],
    ["Antarctica", "North America", "Africa", "Australia"]
  ];

  const geographyAnswers = [
    "World Map",
    "Maryland",
    5,
    "Altantic Ocean",
    "USA",
    7,
    "Antarctica"
  ];

  const readingQuestions = [
    `Who blew the three little piggies' houses down?`,
    "Who won the race, the turtle or the hare?",
    "Did the ugly duckling become an adult duck?",
    "How many porridges did Goldilocks try out?",
    "Little Red Riding Hood was going to whose house?",
    "Who stole Christmas?",
    "What happened when the five monkeys jumped on the bed?"
  ];

  const readingChoices = [
    ["Little Red Riding Hood", "Another piggy", "The wolf", "The wind"],
    ["The turtle", "The hare"],
    ["True", "False"],
    [5, 2, 3, 1],
    ["Her grandma", "Her cousin", "Her best friend", "Her sister"],
    ["Santa Claus", "Grinch", "Cat in the Hat", "Elves"],
    [
      "They bumped their head",
      "Nothing happened",
      "The bed broke",
      "They got hungry"
    ]
  ];

  const readingAnswers = [
    "The Wolf",
    "The turtle",
    "False",
    3,
    "Her grandma",
    "Grinch",
    "They bumped their head"
  ];

  const mathQuestions = [
    "What time is shown on the clock?",
    "How much money is on the picture?",
    "How many pennies are 3 quarters?",
    "What is the expanded form of 864",
    "What is the expanded form of 864?",
    "What is 9 times 4?",
    "What number do these base ten blocks represent?"
  ];

  const mathChoices = [
    ["12:30", "11:45", "2:00", "12:45"],
    ["$3.81", "$3.91", "$5.91", "$3.71"],
    ["15 pennies", "75 pennies", "30 pennies", "50 pennies"],
    ["800 + 80 + 4", "600 + 60 + 4", "800 + 60 + 4", "800 + 40 + 6"],
    [4, 5, 6, 3],
    [4, 8, 9, 5],
    [460, 660, 657, 557]
  ];

  const mathAnswers = [
    "12:45",
    "$3.81",
    "75 pennies",
    "800 + 60 + 4",
    5,
    36,
    657
  ];

  const scienceQuestions = [
    "What body part helps us breathe?",
    "What does NOT help plants grow?",
    "The Earth orbits around the _?",
    "The Earth has 2 moons",
    "Do we see the moon stay the same every night?",
    "The Sun gives us _.",
    "Animals that eat both plants and meat are _."
  ];

  const scienceChoices = [
    ["Lungs", "Legs", "Arms", "Ears"],
    ["Soda", "Soil", "Water", "Light"],
    ["Mars", "Venus", "Moon", "Sun"],
    ["True", "False"],
    ["True", "False"],
    ["Water and snow", "Heat and water", "Light and heat", "Light and snow"],
    ["Herbivore", "Omnivore", "Carnivore"]
  ];

  const scienceAnswers = [
    "Lungs",
    "Soda",
    "Sun",
    "False",
    "False",
    "Light and heat",
    "Omnivore"
  ];

  const questionsAllInOne = [
    geographyQuestions,
    readingQuestions,
    mathQuestions,
    scienceQuestions
  ];

  const choicesAllInOne = [
    geographyChoices,
    readingChoices,
    mathChoices,
    scienceChoices
  ];

  const answersAllInOne = [
    geographyAnswers,
    readingAnswers,
    mathAnswers,
    scienceAnswers
  ];
  
  const randomQuestionsAllInOne = Math.floor( Math.round() * questionsAllInOne.length);

  const questionsOnEl = document.querySelector(".Questions");
  questionsOn.textContent = randomQuestionsAllInOne;

  const randomChoicesAllInOne = Math.floor(Math.round() * choicesAllInOne.length);

  const choicesOnEl = document.querySelector(".Choices");
  choicesOnEl.textContent =randomChoicesAllInOne;

  const randomAnswersAllInOne = Math.floor(Math.round () * answersAllInOne);

  const answersEl = document.querySelector(".Answers");
  answersEl.textContent = randomAnswersAllInOne;

  class Dog {
    constructor(name) {
      this.name = name;
    }
    Barking() {     
        const barkingAudio = new Audio('dog-barking.mp4');
        barkingAudio.play();
        return `${this.name} is losing!`;
    }
    Howling() {
        const howlingAudio = new Audio('dog-howling.mp4');
        howlingAudio.play();
       return `${this.name} is winning!`;
    }
  }

    const chucho = new Dog("Helios");
  
  class Cat {
    constructor(name) {
      this.name = name;
    }
    Meowing() {
        const meowingAudio = new Audio('cat-meow.mp3');
        meowingAudio.play();
      return `${this.name} is losing!`;
    }
    Purring() {
        const purringAudio = new Audio('cat-purring.mp4');
        purringAudio.play();
        return `${this.name} is winning!`;
    }
  }

    const gatita = new Cat("Selene");
  
  function resetButton() {
    document.getElementById("reset").className = "Reset";
  }
  
  function nextButton() {
    document.getElementById("next").className = "Next";
  }
  