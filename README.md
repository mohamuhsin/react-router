# React Router
> Understanding the basics of react router.

## Project Setup:
> Install react router package by running ```npm install react-router-dom```.
>
## Defining Our Routes:
> To define our routes, we import ```createBrowserRouter``` from ```react-router-dom```
> then we call the ```createBrowserRouter``` and pass array of objects in it, in those objects we create a property ```path: '/'``` holding our url path and another property called ```element: <HomePage />``` holding the JSX we want to render.
>

## Providing our defined routes:
> To provide the defined routes to be rendered we import another function called ```RouterProvider``` that takes ```router``` as a special prop and we use it where we want to render or load our routes, i.e in App.jsx inside the return method ```<RouterProvider router={router}``` where the router value is the const storing the ```createBrowserRouter```.
