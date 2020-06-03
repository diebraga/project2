# iTenterprises

The app connects IT professionals looking for a great place to work, to companies 
that are offering free spots in their companies and their set the prices.

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>
 
## UX
 
  The App consists in a `main` page where useres can have an Overview whats the plataform 
  about, with a responsive layout a contact us form for more info, a footer with my social medias and 
  a navbar where you can navigate in the website.

  From the navbar you can access The `users` and `business` section, wich are pretty much the same layout
  but diferent media and text content and a get started button. the `explore` section consists in a static
  list of companies that users can send their requests.

  The `login` and `register` page, all elements are made with all best pratices of HTML and it's proops, 
  CSS flex box animations, and design patterns.

## Features

- Login page "/login" - The page consists in 2 inputs email, password and a button submit bellow a link pointing to 
the register section if user don't have an account.

- Register page "/register" The page consists in 3 inputs email, password, confirm password and a button submit 
bellow a link pointing to the Login section if user already have an account.

- Main Page "/" The page consists in an overview of iTenterprises, how it works with a contact form bellow
for more info.

- Users page "/forusers" The page consists sections in "Advantages of being a user of the plataform" with a 
get started.

- Companies page "/forcompanies" The page consists in sections "Advantages of being a company using the plataform" 
with a get started.

- Explore page "/explore" The page consists in a static responsive card list with the companies users can apply for.

- Components. The app is separated in isolated components that can be used in all app such as navbar, footer, 
cards and input.

   Warning: The App is Entirely static but all the functions can be implemented at any time.


## Technologies 

- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

- 📗 **ReactJs** — A JavaScript library for building user interfaces
- 📕 **styled-components** — Library transforms css in Components.
- 📙 **react-icons** — SVG React icons of popular icon packs using ES6 imports.
- 📒 **react-router-dom** — Library allows easy navigation in the app.
- 📘 **polished** - A lightweight toolset for writing styles in JavaScript.
- ✔️ **Yup** — Javascript schema validation library.
- ✅ **Lint** — ESlint/Prettier/Editor Config. 
- ☑️ **Typescrit** — TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. 
- 🔡 **Unform** — Easy peasy highly scalable ReactJS & React Native forms. 

## Testing

There are `console.log()`s as a test if the information has been sent or not in the forms.
a validation returns the information and the possible errors.

Forms:
  1. Go to "/", "/register" or "/login" pages, right click and inspect and sonsole.
  2. Try to submit the empty form and verify that an error message about the required fields 
  appears in the console and input.
  3. Try to submit the form with an invalid email address and verify that a relevant error 
  message appears in the console and input.
  4. Try to submit the form with all inputs valid and verify that a no errors message appears 
  in your console and input.
    Warning: Don't use Logs returning confidential data.

The App is full responsive in computers and moblile untill 360px width.

## Deployment


In addition, if it is not obvious, you should also describe how to run your code locally.

### Media
- The photos used in this site were obtained from
  https://www.pexels.com/

### Acknowledgements

- I received inspiration for this project from 
  https://www.wework.com/enterprise
  https://codeinstitute.net/
  https://www.airbnb.ie/
  https://rocketseat.com.br/
