# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Check out solution on Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [Check it out here](https://gs-rock-paper-scissors.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Sass
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [SFC - Single File Components](https://vuejs.org/v2/guide/single-file-components.html) - Vue approach to declaring components
- [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) - Modern Vue approach to hooks and components logic.

### What I learned

Simple function to delay execution, it uses Promises for easy completion detection.

I didn't need to pass any arguments, but it can easily be modified to use them.

```js
const wait = (fn, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, delay);
  });
```

I came up with function to fire provided callback number of times in specified time intervals.

I used it to visualize computer selection of figure.

```js
const fireFunctionMultipleTimes = (fn, count, delay = 0) => {
  let results = [];
  for (let i = 0; i < count; i++) {
    results.push(wait(fn, delay * i));
  }
  return results;
};
```

### Continued development

This project has shown me a few areas in my CSS skills that could use some improvements.

- Proper layout spacing on different resolution's is still hard for me to get right.
- I should write more DRY CSS (reduce number of classes, and create more resuable ones).

Also, I think I should come up with some predefined system for CSS/SCSS to improve my productivity (mixins, variables, utility classes etc.)

## Author

- Frontend Mentor - [@GSterczewski](https://www.frontendmentor.io/profile/GSterczewski)
- Twitter - [@gregs_dev](https://twitter.com/gregs_dev)
