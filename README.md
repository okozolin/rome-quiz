# Ancient Rome Quiz application
The purpose of the application is for users to test their knowledge about Ancient Rome.

This project was bootstrapped with [Vite](#Vite)

Stack:
1. ##### Frontend: React

   * The user interface should include a "Start Quiz" button that triggers the quiz.
   * Once the quiz is started, the user should see a series of 5 multiple-choice questions about ancient Rome, fetched from the backend, or generated random in mocks, each with an accompanying hint.
   * Each question should have a 20-second countdown timer. After 10 seconds the hint will present. After the time for the question ended, the application should automatically show the correct answer for 1 second and proceed to the next question.
   * Each question will have 2-4 answers, the size of the app should not change, the answers size should be aligned to the number of answers in the question.
   * Upon completion of the quiz or expiry of the time for all questions, the application should display the user's score (X of Y questions answer correctly or 1 point for any correct answer).
   * The user interface should be responsive and user-friendly.
   * save and display the sum of the time it took the user to answer his correct answers. 
   * Responsive Design - compatibility across different browsers.


2. ##### Backend: NodeJs

   * It should provide a RESTful API that serves a random set of 5 quiz questions upon request.
   * The backend should not collect or store any user-specific data.



## <a id="Vite"></a> React + TypeScript + Vite 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
