module.exports = function (plop) {
  plop.setGenerator("Component", {
    description: "Generate a new React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component Name:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{pascalCase name}}/",
        base: "templates/component",
        templateFiles: "templates/component/*",
      },
    ],
  });
};
