
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

  The `login` and `register` page, all elements are made with the best pratices of HTML and it's proops, 
  CSS flex box animations, and design patterns, all design structute are made aiming better code manteinence 
  and growth, better code reading and test purposes. using the best principles in
  softwere development such as 'DRY', 'KISS', 'Single responsibility' etc.

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
- 🔡 **Jest** — JavaScript Testing Framework. 

## libraries
<pre>
* Yup:  it'ss a javascript object schema validation builder, in an object shape which 
matches the values inputed for a validation, it can be used in both cases with 
a HTML validation or separetly.
https://github.com/jquense/yup

* Styled Components:  it's a CSS library that allow us to wrap all CSS styles in
a `var` that can be exported to our HTML pages as a react component. Syntax EX:


import styled from 'styled-components';                  import React from 'react';
                                                         
export const Container = styled.div`         **=>**      import { Container } from '../../_styles_css/explore/styles';
  p {                                                    
    font-weight: bold;                                   const HelloWorld: React.FC = () => {
    }                                                     return (
`;                                                          <Container>
                                                              **ReactJs**
                                                            </Container>
                                                           );
                                                         };
                                                         
                                                         export default HelloWorld;

For each element wrapped inside <Container> which is already an HTML tag in this case a `div` 
styled components already creates a unique class wich makes it way easy to work on, isolating 
the elements that you wanna apply styles.
  
* Jest:  it's a testing library that helps you to write tests in your application in a fast and
easy way.
</pre>
   
## Testing

    **All components in the app are tested in unit tests using jest**
    1. Go in the project folder and run: `yarn test` or `npm test` in your terminal.
      -   Input element.
          √ should be able to render an input
              √ should be able to render an input
      -   Button element
          √ should be able to render button 
      -   Card element
          √ should be able to render cards
      -   Navbar component
          √ should be able to render navbar correctly
      -   Footer component
          √ should be able to render footer correctly 
       
   
   <pre>
   Route Links in the app are mocked too.
   
   All links are workng/ not broken.
  
   I tested the app manually on a variaty of browsers:
   
   Chrome
   Brave
   Edge
   FireFox
   
   and mobile:
   
   Iphone 10
   Sansung Galaxy S7
   
   Using the inspector I tested responsivity in variety of screen sizes.
   
There are `console.log()`s as a test if the information has been sent or not in the forms.
a validation returns the information and the possible errors.

Forms:
  1. Go to "/", "/register" or "/login" pages, right click and inspect and sonsole.
  2. Try to submit the empty form and verify that an error 
  message about the required fields 
  appears in the console and input.
  3. Try to submit the form with an invalid email address and verify that a relevant error 
  message appears in the console and input.
  4. Try to submit the form with all inputs valid and verify that a no errors message appears 
  in your console and input.
    
    *** Warning Logs shoulden't be used in production
         as they can return confidential data, 
          they're there for learning purposes. ***
    
       </pre>

## Structure

<pre>
Under `itinterprises/src` you gonna find all the project's code source.
Under `itinterprises/src/__tests__` you gonna find all unit tests for all components in the app using jest framework.
Under `itinterprises/src/_assets` you gonna find all media content used in the app.
Under `itinterprises/src/_components` you gonna find all isolated components in the application that I can use in more than one 
page such as buttons, forms, navbar etc. in order to follow the priciples softwere priciple of DRY 'don't repeat yourself' inside
each folder you can find they own CSS following the principle of 'Single responsibility principle'.
Under `itinterprises/src/_styles_css` you gonna find all the CSS content for each page separated in folders in the app.
Under `itinterprises/src/pages` you gonna find all the HTML content in the app.
Under `itinterprises/src/routes` you gonna find all routes to navigate in the app.
Under `itinterprises/src/utils` you gonna find a validation config showed in the log in case of error.
Under `itinterprises/src/routes` you gonna find all routes in the application.

Under `itinterprises/package.json` you gonna find all dependencies in the project in a json file.

 </pre>
 
## Deployment
  
  The website is running deployed on Netlify:
  https://inspiring-wing-60e4c6.netlify.app/
  
## Get Started.

<h4>Required*<h4/>
  <h5>* Npm or Yarn<h5/>
    <ul>
      <li>`$ git clone` This project in your local repository. 
      <li>`$ cd` The project in your editor.
      <li>Run `$ npm instal` or `$ yarn` in your terminal.
      <li>Run `$ npm instal` or `$ yarn`
      <li>Done. the project is running on your localhost.
    <ul/>
        
          
### Media
- The photos used in this site were obtained from:
  https://www.pexels.com/
  
  App View Screenshots.
  
  <img src="assets/1.png" width="250" height="350"/> <img src="assets/2.png" width="250" height="350"/> <img src="assets/3.png" width="250" height="350"/> <img src="assets/4.png" width="250" height="350"/> <img src="assets/5.png" width="250" height="350"/> <img src="assets/6.png" width="250" height="350"/> <img src="assets/7.png" width="250" height="350"/> <img src="assets/8.png" width="250" height="350"/> <img src="assets/9.png" width="250" height="350"/>


### Acknowledgements

- I received inspiration for this project from:
  
  https://www.wework.com/enterprise
  https://codeinstitute.net/
  https://www.airbnb.ie/
  https://rocketseat.com.br/
  Book JavaScript Design Patterns. Addy Osmani.

  
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. .❤❤❤

