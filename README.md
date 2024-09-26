# React Router
> Understanding the basics of react router dom.

## 1. Project Setup:
> Install react router package by running ```npm install react-router-dom```.

## 2. Defining Our Routes:
> To define our routes, we import ```createBrowserRouter``` from ```react-router-dom```
> then we call the ```createBrowserRouter``` and pass array of objects in it, in the first object we create a property ```path: '/'``` holding our url path and another property called ```element: <HomePage />``` holding the JSX we want to render.

## 3. Providing our defined routes:
> To provide the defined routes to be rendered we import another function called ```RouterProvider``` that takes ```router``` as a special prop and we use it where we want to render or load our routes, i.e in App.jsx inside the return method ```<RouterProvider router={router} />``` where the router value is the const storing the ```createBrowserRouter```.

## 4. Added Another Route:
> We added another route by creating a new page, add another object element in our array, and follow the previous step with appropriate path and element to render"

## 5. Navigating Btn Pages with Links:
> We don't navigate btn pages in react using ```<a href=''>``` because this trys to send request to the server and will cause us some perfomance issues, to naviagte we import Links from react-router-dom, under the hood, it does render an anchor element but it basically listens for clicks on the element and instead of ```href=''``` it uses ```to=''```.

## 6. Layouts and Nested Routes:
> Added a Root layout that Wraps all other routes so that the MainNavigation can be shown in every page.

## 7. Showing ErrorPages with ErrorElement Property:
> Used the property ```errorElement``` of the ```createBrowserRouter``` router is to define a special page(jsx) that is rendered when we try to navigate non-existing page.

## 8. Working with NavLink:
> We added links to navigate to our pages using ```Link``` and ```NavLink```.```Navlink``` is used Navbar links to provide styling like showing active links with highlighting, underline e.t.c

## 9. Navigating programmatically:
>To add functionality whereby navigation can be done automatically such as using a timer or an event handler. We used ```useNavigate``` hook from ```react-router-dom``` to navigate to the desired page in the code.

## 10. Defining and using dynamic routes:
> Dynamic routes are defined by adding a route with a parameter using a colon in the path, such as path: ```/products/:productId```. The parameter can be accessed within the component using useParams from react-router-dom to fetch the dynamic value from the URL.

> We used this feature to add links to navigate to the ProductPage for each product

## 11. Adding Links for dynamic routes:
>To add links for dynamic routes, we used <Link> or <NavLink> components with the to prop containing the dynamic part, such as ```<Link to={`/products/${product.id}`}>{product.title}</Link>```.

## 12. Working with index routes and learning about relative and absolute path:

### Relative vs absolute path
> Absolute paths start from the root of your application and are best suited for navigating to pages from the top-level, such as the homepage or other main routes. Relative paths, on the other hand, begin from the current page's location and are ideal for navigating to routes within a particular section of the app. 

> Relative paths are useful when navigating within a specific part of the app, whereas absolute paths start from the root and are used for full-page navigation. e.g. ```/product``` to  ```/products/:productId```. 
### index routes
> Index routes are default child routes that render when no other child routes match within a parent route. They are defined by setting index: true in the route configuration. This ensures that when a user visits the parent route, the index route is displayed unless a specific child route is requested.

> We defined the HomePage route as the index such that the parent route ```/``` loads it by default.