# Shopping Cart

## Abstract
Store app created for The Odin Project curriculum. 
### Features:
- Homepage
- Store Page
- Product Pages
- Cart Page
- Ability to add items to cart and update quantity

This project was build with React and `react-router-dom`. This my first true multipage web app that I've built. 

The first goal of the project was to build the `Store` page. I ended up using [Fake Store API](https://fakestoreapi.com/) to fetch some products and practice using `useEffect` to call the API on first render of the `Store` page. 

Once the data was fetched I mapped through the array to render each product in a `Product` component. 

Next, I built a `Filter` component that uses product price and category to set a filter on which products are rendered to the screen. I ended up using the [Slider component from MUI](https://mui.com/material-ui/react-slider/) to set the high and low end of the price filter. This was the first time that I've used a community component in one of my projects. It was extremely simple to get running thanks to the clear documentation at MUI. 

One thing that I thought was cool was how I implemented handling the selected department in the `Filter` component. The way it works, is when a user selects the department that they want to filter, it sets the text of that department to bold. It does this by setting state to that specific department and renders the component in bold with conditional rendering based on state. 
Well thats works fine, but I wanted to make it so that when the user selects a different department, it will unset that state on the first department so that the font weight returns to normal. I thought about how to get this to work with four different states (four departments) and ended up using an array to hold each state and state setter, along with a value, and using that value to callback the state setter when the value matches the passed argument in the handler function. 

For example, here is the array containing the states:
```
const states = [
    {state: activeMen, fn: setActiveMen, category: "men's clothing"},
    {state: activeWomen, fn: setActiveWomen, category: "women's clothing"},
    {state: activeJewel, fn: setActiveJewel, category: "jewelery"},
    {state: activeElec, fn: setActiveElec, category: "electronics"}
  ];
  ``` 
  Then I use this handler function to iterate through the array with a given argument:
  ```
    function handleStates(department) {
    states.forEach(({ state, fn, category}) => {
      if (state) {
        fn(false);
      }
      if (category === department) {
        fn(true);
      }
    });
  }
  ```
This first sets any true state (aka the bold font weight) to false. Then it calls back the state setter, setting the state to true, only when the department value matches the category value. 

I thought this was a cool approach to get this functionality to work and just wanted to point that out.

Following the `Filter`, I created `Product` pages that can be accessed when a user clicks on the product name in the store. Creating the dynamic pages with `react-router-dom` was simple enough, making use of temperate literals and by setting the `to` prop to  `/store/:id` on the `Route` component in my `RouterSwitch` component. The difficulty for me was figuring out how to pass data through the `Link` component. After some googling, I came across the `useLocation` hook in `react-router-dom`. I made use of this by passing an object of data to the `state` prop in the `Link` component, and destructuring it in my `Product` page to retrieve the data. 

After finishing the `Store`, I moved on to building the cart. I created a modal that renders each item in the `cart` state,  and contains a `Link` component that takes the user to the `Cart` page. 

On the `Cart` page, each item is once again rendered, this time with quantity buttons that allows the user to adjust the quantity of each item in their cart. These buttons update the `cart` state with the new quantities, in turn re-rendering the `Cart` with updated price totals. 

Once everything else was finished, I built the `Home` page with `Link`s to the `Store`, including specific departments. I added a `video` to the home banner by importing a video into the component and calling it as the `src` in the html `video` tag. 

Lastly, I want to note that this is the first time that I've tried using separate CSS files for each component. I came across this suggestion on the internet. It was an interesting workflow and while it did make my project structure larger, it did make it easier to locate the style declarations for each component (vs scrolling through a massive singular CSS page). I'm sure that its not the BEST way to go about handling CSS in React projects. I intend to keep experimenting with different ways to implement CSS to find what works for me. 

## Lessons learned

- How to build multipage application using `react-router-dom`
- Passing state through `Link` components
- Using community components
- Using separate CSS files for each component
- Adding video to HTML with the `video` tag

## Asset sources

The homepage video is free use and was found [here](https://pixabay.com/videos/mountains-parachute-paragliding-81945/).

The homepage picture is free use and was found [here](https://www.pexels.com/photo/photo-of-dried-lava-983200/).