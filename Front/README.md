# T3-Front-24-1

## Ejecución

Ejecutando desde my-diary-frontend:

1. `yarn install`
2. `yarn dev` / `yarn start`

Hay dos páginas la de landing y la de Entries, cuyo link es /Entries/:user.

Se puede acceder manualmente a Entries, cambiando el url. Pero si se quiere acceder de la manera convencional, se deben completar los métodos de get_user y post_user en la api.

Para editar una Entry se debe presionar el ícono del lápiz a la derecha de esta y luego el del checkmark. Esto enviará una update a la Api aunque no se haya cambiado nada.


## Test

Lo primero es agregar las dependencias necesarias con el comando `yarn add selenium-webdriver chromedriver --dev` después es necesario crear un archivo .js ejecutable en este caso se utiliza example-test.js, el cual es necesario agregar en el package.json en el script :

```
"scripts": {"dev": "vite","build": "vite build","lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0","preview": "vite preview","test": "node ./example-test.js"  },
```

Posteriormente es posible correr los test con yarn test
