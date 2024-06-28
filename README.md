# Movie Test App For useReducer/Context API/Custom Hooks

This is a small app I made to learn about useReducer and also practice working with the context API and custom hooks. I had used Redux before but not the built in useReducer so when I saw a video about a developer using it for a interview project I thought I would give it a try.

This project is also the first time I have used a component library. I decided to use DaisyUI and I really enjoy using these libraries as you save a lot of time and can get something professional looking up and running very quickly.

I decided to implement infinte scrolling as well using the react-interaction-observer package and I think it works quite well. It took me some time to get it to a point where I was happy with it but I think works very smoothly now.

Error Toasts are displayed with react-hot-toat if no data can be found and a error message displayed in place of the movies list.

## Issues Encountered

One of the issues I had as a result of implementing infinite scrolling was due the my reducer action using the spread operator to append new data to the movies array. New movies needed to be appended to the array but because everything renders twice in Strict Mode that meant that instead of loading 20 movies into the array it loads 40. The way I have set everything up is I intially load the data in useEffect in my custom hook, the state page and genre are in the dependency array so when they change the function runs again. To solve this issue with as little code as possible I simply made a check in the reducer action to check if the page was the first page and if it was just set the array rather than spreading it to a new array.

I am a bit embaraased to say I spent way longer on this issue than I care to admit, especially for something that only happens with Strict Mode on, however I was determined to come up with a solution and didn't want to resort to just disabling Stirct Mode. I learnt a lot in the process of solving this issue and making this basic app over all.

Here is how I solved my issue:

```js
    case "SET_MOVIES":
      return {
        ...state,
        movies:
          state.page === 1
            ? action.payload
            : [...state.movies, ...action.payload],
        isLoading: false,
      };

```

## Technologies Used

- React
- Tailwind
- DaisyUI
- HeadlessUI
- React-Hot-Toast
- React-Interaction-Observer
