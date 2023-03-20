# React JS - East State - Proyecto Ecommerce

## Presentación
Mi nombre es Rodrigo Soca y este es mi proyecto para el curso de ReactJS en CoderHouse 2023.
Mi proyecto  está creado con React, utilice herramientas como React Router DOM, React Hooks  y Bootstrap.

## Flujo Ecommerce
El usuario ingresa a la pagina principal y mediante el navbar en las categorias homes,apartments y garages que despliegan dichos una listas con dichos items (i.e. casas,apartamentos y garages),  además tambien esta la seccion for sale donde se despliega una lista con todos los productos anteriores,a los cuales se les puede hacer click para poder ir al detalle del producto seleccionado, luego agrgarlos al carrito y proceder al checkout para generar la orden.


### Home Page
La pagina home page desplega un carousel con imagenes respectivas a los elementos a la venta y se visualizara el navbar y el footer.

### Items
Al acceder a algunas de las opción "Homes" , "Apartment", "Garages" o "For Sale" se te redirigirá a un listado de productos filtrados con la categoria correspondiente a la seleccionada.

### Item Detail
Al clickear un item se te redireccionara a los detalles del mismo donde se mostra el nombre,precio,zona,descripcion y direccion, además
cuantan con  un contador (item count) que te permitira seleccionar la cantidad (limitandola al stock de dicho producrto) agregarla al carrito y luego proceder al checkout.


### Cart
Se desplegara una lista ordenara con los productos agregados al carrito, se mostrará el nombre,precio, la cantidad del producto selecionado, ademas un icono clickeable el cual elimina el producto.
Tambien se indicara el total a pagar y un boton para limpiar el carrito.
Ademas debajo del total se desplegara un boton para proceder al checkout.

### Checkout
Luego de clickear el boton del carrito para proceder al checkout se desplegara un formulario para proceder a generar la orden.
Al finalizar la compra con exito se mostrara en pantalla un contenedor con un mensaje, el ID de la compra, y un boton para seguir comprando.


### NavBar
En todas las páginas se podra visualizar el NavBar, el cual dispone de : 

- Logo - donde al hacer click te redirecciona a la pagina principal ("/")
- Homes- donde al hacer click se redireccionara a los items de la categoria Homes
- Apartments- donde al hacer click se redireccionara a los items de la categoria Apartments
- Garages- donde al hacer click se redireccionara a los items de la categoria Garages
- Cart- se desplegara el icono a la derecha del navbar(desktop) si hay productos en el carrito al clickear el icono se redirecciona al carrito para proceder al checkout




### Footer
En el footer se pueden visualizar 5 iconos y los derechos de autor de la página.



## Librerias y dependencias utilizadas


### React-Router-DOM

Utilice React-Router-DOM para dotar de navegabilidad a la pagina, utilizando los componentes que provee.

### Bootstrap

Utilicé Bootstrap para la implementación del Carousel en el home page, el formulario en checkout   y el estilo de los items de la pagina

### Bootstrap icons
Los iconos de la pagina corresponden a bootstrap icons

### Animate Css
La  animacion  fuen en la seccion correspondiente a Error 404 donde se realiza un efecto flash en el texto




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
