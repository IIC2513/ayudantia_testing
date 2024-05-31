# ayudantia_testing

## Test Backend

Los comandos necesarios a realizar en la terminal son:

```
yarn add --dev jest yarn add --dev supertest 
```

Solo es posible ejecutar el siguiente comando una vez es definido en el 'script' en package.json

```
yarn test
```

Es necesario crear en postgres la nueva base de datos {process.env.DB_NAME}_test y ejecutar migraciones dentro de esta, o no podrán ejecutar el script.


## Test Frontend

Lo primero es agregar las dependencias necesarias con el comando `yarn add selenium-webdriver chromedriver --dev` después es necesario crear un archivo .js ejecutable en este caso se utiliza example-test.js, el cual es necesario agregar en el package.json en el script :

```
"scripts": {"dev": "vite","build": "vite build","lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0","preview": "vite preview","test": "node ./example-test.js"  },
```

Posteriormente es posible correr los test con `yarn test`, esto se debe realiza desde dentro de la carpeta my-diary-frontend, teniendo ya levantada la página es decir corriendo `yarn dev` en el back y frontend en terminales paralelas. O generará errores.
