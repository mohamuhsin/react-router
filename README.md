# React Router
> Understanding the basics of react router dom.

## 1. Project Setup:
> Install react router package by running ```npm install react-router-dom```.

## 2. Defining Our Routes:
> To define our routes, we import ```createBrowserRouter``` from ```react-router-dom```
> then we call the ```createBrowserRouter``` and pass array of objects in it, in the first object we create a property ```path: '/'``` holding our url path and another property called ```element: <HomePage />``` holding the JSX we want to render.

## 3. Providing our defined routes:
> To provide the defined routes to be rendered we import another function called ```RouterProvider``` that takes ```router``` as a special prop and we use it where we want to render or load our routes, i.e in App.jsx inside the return method ```<RouterProvider router={router}``` where the router value is the const storing the ```createBrowserRouter```.

## 4. Added Another Route:
> We added another route by creating a new page, add another object element in our array, and follow the previous step with appropriate path and element to render"

## 5. Navigating Btn Pages with Links:
> We don't navigate btn pages in react using ```<a href=''>``` because this trys to send request to the server and will cause us some perfomance issues, to naviagte we import Links from react-router-dom, under the hood, it does render an anchor element but it basically listens for clicks on the element and instead of ```href=''``` it uses ```to=''```.

## 6. Layouts and Nested Routes:
> Added a Root layout that Wraps all other routes so that the MainNavigation can be shown in every page.

## 7. Showing ErrorPages with ErrorElement Property:
>

## 8. Working with NavLink:
>

## 9. Navigating programmatically:
>

## 10. Defining and using dynamic routes:
>

## 11. Adding Links for dynamic routes:
>

## 12. Working with index routes and learning about relative and absolute path:
>
