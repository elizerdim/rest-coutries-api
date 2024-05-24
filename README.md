# REST Countries API with color theme switcher

This is a solution to the [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) challenge on [Frontend Mentor](https://www.frontendmentor.io/). 

## The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus:** Toggle the color scheme between light and dark mode

## Screenshot

![]()

## Links

- [View Code](https://www.example.com)
- [Live Preview](https://www.example.com)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

## What I learned

- I used ```data-*``` attribute and ```[data-theme='dark']``` CSS selector to manage color mode change easily (see the Useful resources section for the article), and also used ```(prefers-color-scheme: dark)``` media rule:

  ```css
  :root {
    --clr-primary: #FFFFFF;
    --clr-secondary: #F2F2F2;
  }

  [data-theme='dark'] {
    --clr-primary: #2B3844;
    --clr-secondary: #202C36;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --clr-primary: #2B3844;
      --clr-secondary: #202C36;
    }
  }
  ```

- I named my color mode variable ```colorMode``` first with a string value of "light", but then I decided to name it ```darkMode``` with a boolean value. After I made the changes, I got an error from TypeScript. As I was trying to solve it I realized I forgot to make a bunch of changes, which made me realize how useful and awesome TypeScript is. I appreciate it more now! I also learned the following for explicitly assigning a type to a state variable:

  ```js
  const [darkMode, setDarkMode] = useState<boolean>(false);
  ```

- ```Git: Stage Selected Ranges```!!! Thanks to this stack overflow [entry](https://stackoverflow.com/a/65649756), I discovered this godsent command in VS Code. I had been struggling with ```git add -patch``` and ```git add -e```, and the hunks that just could not be made smaller with ```s```. But I added a custom keybinding (Ctrl + Alt + K) to this amazing command, and now I am not terrified by the idea of dividing the changes I made into smaller commits anymore. I feel that my commits will be much cleaner from now on!

- Using [Font Awesome with React](https://docs.fontawesome.com/web/use-with/react/add-icons#add-individual-icons-explicitly)


## Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Useful resources

- [Easy Dark Mode (and Multiple Color Themes!) in React](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) - This article helped me figure out how to organize CSS for color mode change from a top level.
- [Dark mode in React: An in-depth guide](https://blog.logrocket.com/dark-mode-react-in-depth-guide/)
- [Using TypeScript with React (from the React docs)](https://react.dev/learn/typescript)
- [Font Awesome with React](https://docs.fontawesome.com/web/use-with/react/add-icons#add-individual-icons-explicitly)