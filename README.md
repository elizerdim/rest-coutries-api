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

## Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Useful resources

- [Easy Dark Mode (and Multiple Color Themes!) in React](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) - This helped me figure out how to organize CSS for color mode change from a top level.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.