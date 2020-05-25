# CRUD PRODUCTS APP

![Products Page](https://res.cloudinary.com/dzhj8ymvz/image/upload/v1590374682/crudreduxsaga_bmf5gp.png "Products Page")

![Add Product Page](https://res.cloudinary.com/dzhj8ymvz/image/upload/v1590374682/crudreduxsaga2_rssbgw.png "Add Product Page")

# Redux

## Qué es Redux

- Redux te permitirá manejar el State de tus aplicaciones más fácil conforme van creciendo.

- Te ayuda a manejar los datos conforme las acciones realizadas por el usuario.

## Características de Redux

- Solo se tiene un State principal.

- El State cambia de acuerdo a lo que sucede en la Interfaz de Usuario.

- Solo ciertas acciones van a cambiar el State

- El usuario es el que utiliza estas acciones y cambia el State

## Cuando Utilizar Redux

Si tu aplicación es sencilla y pequeña no necesitas Redux, Utiliza Hooks o Context. 

Si tu proyecto es grande y será mantenido por varias personas, Redux será de gran ayuda. 

## Mitos sobre Redux

Tu aplicación será más rápida.
Redux solo existe en React.
Debo utilizarlo en cada proyecto.

## Terminología de Redux

STORE contiene el STATE ( 1 por aplicación )

DISPATCH ejecuta la acción que actualizará el STATE

ACTION Objetos JS, Tienen un tipo y un payload (Datos que van a modificar el STATE)

SUBSCRIBE similar a un event listener para el STATE

REDUCERS Funciones que saben que hacer con las acciones y el payload


## Creando un Fake Server con JSON Server

https://github.com/typicode/json-server

En nuestra terminal como administrador, corremos el siguiente comando:

```
npm install -g json-server
```

En la raiz del proyecto agregamos nuestra Fake DB como un archivo JSON: ejemplo:

db.json:
```
{
    "productos": [
        {
            "id": 1,
            "nombre": "Jugo de Zanahoria",
            "precio": "31111"
        },
        {
            "id": 2,
            "nombre": "Jugo de Naranja",
            "precio": "1"
        },
        {
            "nombre": "Jugo de Naranja",
            "precio": "300",
            "id": 3
        },
        {
            "nombre": "Rib Eye 800g",
            "precio": "200",
            "id": 4
        },
        {
            "nombre": "Jugo de Fresa",
            "precio": "200",
            "id": 5
        }
    ]
}
```

En la terminal de VSCode ejecutamos el siguiente comando:

```
json-server db.json --port 4000
```

y nos aparecerá:

```
  Resources
  http://localhost:4000/productos

  Home
  http://localhost:4000
```

y listo ya lo tenemos corriendo en nuestro puerto 4000.

Soporta PUT, GET, POST etc. como una API Real!.

## Configurar REDUX

```
npm i react-redux
npm i redux
npm i redux-thunk
```

redux es la librería como tal de Redux, react-redux es la que tiene funciones para conectar nuestra app de create react app con redux. y redux-thunk es una forma de utilizar funciones asíncronas en redux.




___
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
