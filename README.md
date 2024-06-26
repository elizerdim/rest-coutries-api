# REST Countries API with color theme switcher

This is a solution to the [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) challenge on [Frontend Mentor](https://www.frontendmentor.io/). 

## The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using the input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Refresh the page on the country detail pages
- Click through to the border countries on the detail page
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Have screen readers read the focused region on the filter field
- **Bonus:** Toggle the color scheme between light and dark mode that persists on next visit or after a refresh

## Screenshot

![](./screenshot.png)

## Links

- [View Code](https://github.com/elizerdim/rest-coutries-api)
- [Live Preview](https://rest-coutries-api-six.vercel.app/)

## Built with

- React
- TypeScript
- React Router
- react-select npm package
- lodash npm package
- [Rest Countries API](https://restcountries.com/)  
&nbsp;  
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow

## What I learned

This project turned out to be quite educational for me. I struggled with quite a few things, spent hours on research, and came out with a deeper understanding of React, React Hooks, asyncronous JavaScript and how to handle it in React, Node.js, Vite, differences between bundlers and npm packages (espacially that not all of them can be used with Vite). It has quite a number of commits because I tried out a lot of things, the process was quite experimental, but I'm happy with how it turned out. Here is of the things I learned (probably not exhaustive):

- I used `data-*` attribute and `[data-theme='dark']` CSS selector to manage color mode change easily (see the Useful resources section for the article), and also used `(prefers-color-scheme: dark)` media rule:

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

- I named my color mode variable `colorMode` first with a string value of `"light"`, but then I decided to name it `darkMode` with a boolean value. After I made the changes, I got an error from TypeScript. As I was trying to solve it I realized I forgot to make a bunch of changes, which made me realize how useful and awesome TypeScript is. I appreciate it more now! I also learned the following for explicitly assigning a type to a state variable:

  ```js
  const [darkMode, setDarkMode] = useState<boolean>(false);
  ```

- `Git: Stage Selected Ranges`!!! Thanks to this [stack overflow entry](https://stackoverflow.com/a/65649756), I discovered this godsent command in VS Code. I had been struggling with `git add -patch` and `git add -e`, and the hunks that just could not be made smaller with `s`. But I added a custom keybinding (Ctrl + Alt + K) to this amazing command, and now I am not terrified by the idea of dividing the changes I made into smaller commits anymore. I feel that my commits will be much cleaner from now on!

- Using [Font Awesome with React](https://docs.fontawesome.com/web/use-with/react/add-icons#add-individual-icons-explicitly)

- The new [HTML `<search>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search)

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

- I tried to use `git rebase` on a published commit (I didn't realize it was already published) and also tried `git stash` because I had unstaged changes, and it did not go well. I have a duplicate commit and an unnecessary merge on this project now, and I guess my best option at this point is to just leave them be.

- It seems that `export default` is not allowed before a `type`: [export default type #41409 from TypeScript issues page](https://github.com/microsoft/TypeScript/issues/41409) - made myself crazy looking for my mistake for a moment there

- [React Select Accessibility](https://react-select.com/advanced#accessibility) - I modified the custom aria live example on this page to add accessibility to my Select component. I know that accessibility comes built-in with HTML elements such as `<select>` and `<option>`, but not with custom elements, so I was happy to see that this package has a section for adding accessibility to this custom interactive component.

- I discovered `LoaderFunction` and `LoaderFunctionArgs` types for TypeScript, even though I didn't end up using a loader at all. I realized that there are certain TypeScript types that are defined on packages that can be imported and used as is, which is very useful.

- I also figured out how to pass an extra parameter to the loader function so that I can put it into its own file (again, I ended up not using it but it might be useful to keep it here for future reference):

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
      (c) => kebabCase(c.name.common) === params.id
    )!;
    return country;
  }
  ```

- CSS `::placeholder` pseudo-element:

  ```css
  .searchbar-icon,
  .searchbar-input::placeholder {
    color: var(--clr-placeholder);
  }
  ```

- CSS `:focus-within` pseudo-class:

  ```css
  .searchbar-input:focus {
    outline: none;
  }

  .searchbar:focus-within {
    outline: 2px solid var(--clr-font);
  }
  ```
  
  I really hope visually changing focus styles in this way doesn't mess up the screen readers; I couldn't find an explanation online but will look into it further.

- I gained a better understanding of box-shadow: `<blur-radius>` (3rd value) makes the shadow bigger and lighter and `<spread-radius>` makes the shadow bigger or smaller depending on the value, which can be positive or negative. I used a negative value for this one for the first time.

  ```css
  .searchbar {
    box-shadow: 2px 2px 15px -5px var(--clr-box-shadow);
  }
  ```

- How to style React Select element with [classNamePrefix prop](https://react-select.com/styles#the-classnameprefix-prop) and [theme object](https://react-select.com/styles#overriding-the-theme). At first, I used `unstyled` prop but then decided to keep some of the default styles, mainly so that I don't have to write focus and hover states from scratch, so I used a combination of the two methods with `!important` flags in my CSS.

- `<search>` element cannot go inside `<form>` element (according to [W3S Markup Validation Service](https://validator.w3.org/))

- How to work with APIs: Figuring out the data structure of the API, filtering and mapping through arrays with objects, getting keys and values from objects, using those values as keys to get other values from other objects, and creating an interface with TypeScript from the data structure 

- [(e.target as HTMLElement)](https://www.reddit.com/r/learnjavascript/comments/hlp4wm/typescript_error_ts2339_property_closest_does_not/)

  ```js
  function handleClick(e: MouseEvent) {
        const isTextSelected = window.getSelection()?.toString();

        if (!isTextSelected) {
          (e.target as HTMLElement).closest("article")!.querySelector("a")!.click();
        }
      }
  ```

- TypeScript `interface` allows additional properties that are not defined by the interface. So I only had to include the properties and values that I used in my code in my Country interface, even though the country objects coming from the API that I pass into my functions include more properties.

- `[propName: string]` can be used in an interface when the key is unknown.

- I spent a lot of time studying the data structure of the API and getting correct values for display, and I wish the dominant language was specified in the data structure. Because both the languages and the native names are objects with the abbreviation of the language as the key and either the language or the native name as values like this: 

  ```js
  name: {
    nativeName: {
      ber: {
        official: 'Sahrawi Arab Democratic Republic',
        common: 'Western Sahara'
      },
      mey: {
        official: 'الجمهورية العربية الصحراوية الديمقراطية',
        common: 'الصحراء الغربية'
      },
      spa: {
        official: 'República Árabe Saharaui Democrática',
        common: 'Sahara Occidental'
      }
    },
  }
  languages: { 
    ber: 'Berber', 
    mey: 'Hassaniya', 
    spa: 'Spanish' 
  },
  ```

  So, the only way of getting the native name is by using one of the shorthands for the languages. This example is from "Western Sahara" (the name from name.common). There is no way of getting the native name according to the dominant language and 95 out of 250 have multiple languages and native names. I decided to get the keys with Object.keys and use the last key to get the corresponding native name (the last one tends to be the dominant language throughout the data), and if it doesn't exist, then get the first value from the native names with this function:

  ```js
  function getNativeName(country: Country, languages: string[]) {
    if (country.name.nativeName) {
      return country.name.nativeName?.[languages[languages.length - 1]]?.common || 
      Object.values(country.name?.nativeName)[0].common;
    } else {
      return false;
    }
  }
  ```

- I wanted to fetch single countries for the DetailPage if the user didn't go through the HomePage and went to the country's page directly from the url, but the data structure of the API listed border countries only with cca3 codes, and I needed their native names for the buttons at the bottom of the page. I didn't want to use another third-party API to get country names from cca3 codes because that would lead to inconsistencies between the data from the two APIs. So I ended up fetching all the countries in App.tsx and passing that on to the page components.

- Not all npm packages can be used with Vite. For example, [@loadable/component](https://www.npmjs.com/package/@loadable/component) is absolutely incompatible with Vite because it uses `Webpack` as bundler and Vite uses `esbuild`. I came across a piece of code that uses @loadable/component, tried it out in my project, and spent a loooong time before figuring out why it didn't work. Oh, well. At least now I have a much better mental model for the differences between bundlers, CommonJS vs. ES Modules in Node.js, require vs. import, etc.

- I was getting an error that said "Cannot update a component (`SelectList`) while rendering a different component (`LiveRegion2`). To locate the bad setState() call inside `LiveRegion2`, follow the stack trace". All the sources on the internet recommended wrapping setState call into useEffect, but that wasn't possible in my case, so I found [this stackoverflow entry](https://stackoverflow.com/a/69236626) and used setTimeout instead. It removed the error.

- Refresh on detail pages gave a 404 error after deployment with Vercel, and I found an article (in the Useful resources below) that suggested adding a vercel.json file to the root directory and adding the following inside it:

  ```js
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

## Continued development

- Learn more about React design patterns and best practices.
- Find out if changing focus styles affects screen readers.

## Useful resources

- [Easy Dark Mode (and Multiple Color Themes!) in React](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) - This article helped me figure out how to organize CSS for color mode change from a top level.
- [Dark mode in React: An in-depth guide](https://blog.logrocket.com/dark-mode-react-in-depth-guide/)
- [Using TypeScript with React (from the React docs)](https://react.dev/learn/typescript)
- [Sharing State Between Components (from React docs)](https://react.dev/learn/sharing-state-between-components#challenges) - The second challenge shows how to implement a search bar as a component and lift its state to its parent.
- [Excess Property Checks](https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks) - How to use interface to define an object with unknown properties 
- [git stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)
- [Block links with JavaScript](https://css-tricks.com/block-links-the-search-for-a-perfect-solution/) - This article shows a pattern for making block links with JavaScript to solve the problems with other approaches.
- [How to resolve the 404 not found error in vercel deployments](https://medium.com/@awdhesh1700/how-to-resolve-the-404-not-found-error-in-vercel-deployments-a0fe90c1447a) - I used the second recommendation on this article to fix the 404 Not Found error after deployment with Vercel.
- [Vercel and security headers](https://manel-lemin.medium.com/take-your-website-to-an-a-with-vercel-and-security-headers-44d13154eda7)