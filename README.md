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

<!-- TODO: Fix this list -->
- React
- TypeScript
- React Select npm package
- [Rest Countries API](https://restcountries.com/)
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

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

- The new [HTML ```<search>``` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search)

- How to use interface to define an object with unknown properties 
  ```js
  export default interface Country {
    name: {
      common: string;
      [propName: string]: string | object;
    };
    [propName: string]: string | boolean | number | object;
  }
  ```

- I tried to use ```git rebase``` on a published commit (I didn't realize it was already published) and also tried ```git stash``` because I had unstaged changes, and it did not go well. I have a duplicate commit and an unnecessary merge on this project now, and I guess my best option at this point is to just leave them be.

- It seems that ```export default``` is not allowed before a ```type```: [export default type #41409 from TypeScript issues page](https://github.com/microsoft/TypeScript/issues/41409) - made myself crazy looking for my mistake for a moment there

- react-select npm package

- [React Select Accessibility](https://react-select.com/advanced#accessibility) - I modified the custom aria live example on this page to add accessibility to my Select component. I know that accessibility comes built-in with HTML elements such as ```<select>``` and ```<option>```, but not with custom elements, so I was happy to see that this package has a section for adding accessibility to this custom interactive component.

- I discovered ```LoaderFunction``` and ```LoaderFunctionArgs``` types for TypeScript.

- I also figured out how to pass an extra parameter to the loader function so that I can put it into its own file:

  ```js
  // arrow function inside the Router element
  <Route
    path="/:id"
    element={<DetailPage />}
    loader={({ request, params }: LoaderFunctionArgs) =>
      countryLoader(countries, { request, params })
    }
  />

  // utility function in the countryLoader.ts file
  const countryLoader = (countries: Country[], {params}: LoaderFunctionArgs): Country => {
  const country = countries.find(
      (c) => c.name.common.toLowerCase().split(" ").join("-") === params.id
    )!;
    return country;
  }
  ```

- CSS ```::placeholder``` pseudo-element:

  ```css
  .searchbar-icon,
  .searchbar-input::placeholder {
    color: var(--clr-placeholder);
  }
  ```
- CSS ```:focus-within``` pseudo-class:

  ```css
  .searchbar-input:focus {
    outline: none;
  }

  .searchbar:focus-within {
    outline: 2px solid var(--clr-font);
  }
  ```
  I really hope visually changing focus styles in this way doesn't mess up the screen readers; I couldn't find an explanation online but will look into it further.

- I gained a better understanding of box-shadow: ```<blur-radius>``` (3rd value) makes the shadow bigger and lighter and ```<spread-radius>``` makes the shadow bigger or smaller depending on the value, which can be positive or negative. I used a negative value for this one for the first time.

  ```css
  .searchbar {
    box-shadow: 2px 2px 15px -5px var(--clr-box-shadow);
  }
  ```

- How to style React Select element with [classNamePrefix prop](https://react-select.com/styles#the-classnameprefix-prop) and [theme object](https://react-select.com/styles#overriding-the-theme). At first, I used ```unstyled``` prop but then decided to keep some of the default styles, mainly so that I don't have to write focus and hover states from scratch, so I used a combination of the two methods with ```!important``` flags in my CSS.

- ```<search>``` element cannot go inside ```<form>``` element (according to [W3S Markup Validation Service](https://validator.w3.org/))

## Continued development

- Find out if changing focus styles affect screen readers.

## Useful resources

- [Easy Dark Mode (and Multiple Color Themes!) in React](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) - This article helped me figure out how to organize CSS for color mode change from a top level.
- [Dark mode in React: An in-depth guide](https://blog.logrocket.com/dark-mode-react-in-depth-guide/)
- [Using TypeScript with React (from the React docs)](https://react.dev/learn/typescript)
- [Sharing State Between Components (from React docs)](https://react.dev/learn/sharing-state-between-components#challenges) - The second challenge shows how to implement a search bar as a component and lift its state to its parent.
- [Excess Property Checks](https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks) - How to use interface to define an object with unknown properties 
- [git stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)