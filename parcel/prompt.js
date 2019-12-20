const prompts = require("prompts");


(async () => {
  const questions = [
    {
      type: "confirm",
      name: "version",
      message: "Have you bumped version?"
    },
    {
      type: "confirm",
      name: "tag",
      message: "Have you pushed a tag?"
    },
    {
      type: "confirm",
      name: "readme",
      message: "Have you filled out the readme?"
    }
  ];

  const response = await prompts(questions);
  const values = Object.values(response);
  values.forEach( val => !val && process.exit(1));

})();
