# T3-Back-24-1

## Test

Los comandos necesarios a realizar en la terminal son:

```
yarn add --dev jest yarn add --dev supertest 
```

Solo es posible ejecutar el siguiente comando una vez es definido en el 'script' en package.json

```
yarn test
```

Es necesario crear en postgres la nueva base de datos {process.env.DB_NAME}_test o no podrán ejecutar el script

## Ejecución

[1] - [0.5 por cada uno]

```
# Escribe los comandos a ejecutar para correr tu tarea
```

```
yarn install
yarn dev / yarn start
```

## Postgres

[2.5]

```
# Indica los comandos de terminal necesarios para inicializar la base de datos acá

1. Como inicializar psql
2. Como crear el usuario de postgres
3. Como crear la base de datos
4. Como crear la clave del usuario
5. Como conectarse a la base de datos

```

- `sudo -u postgres psql` para inicializar psql
- `sudo -u postgres createuser --superuser [INGRESAR_USUARIO]:` para crear el usuario
- `sudo -u postgres createdb [INGRESAR_NOMBRE_BDD]` para crear el database
- `ALTER USER [INGRESAR_USUARIO] WITH PASSWORD 'CLAVE_GENERICA';` para crear la clave (se debe correr dentro del entorno postgres)
- `psql -U [INGRESAR_USUARIO] -d [INGRESAR_NOMBRE_BDD] -h 127.0.0.1` para conectarse a la BDD

## Entorno

[1.5]
Una vez creada la base de datos e inicializado psql, se debe crear un archivo `.env`

```
1. Indica el usuario de la base de datos
2. Indica la contraseña del usuario de la base de datos
3. Indica el nombre de la base de datos
4. Indica el host de la base de datos
5. Indica el puerto en el que correrá la aplicación
```

```
DB_USERNAME = <db_username>
DB_PASSWORD = <db_password>
DB_NAME = <db_name>
DB_HOST = localhost
PORT = 3000
```

## Sequelize

[1] - [0.5 por cada uno]

Deberas indicar los comandos de terminal necesarios para generar los modelos y las migraciones de la base de datos.

### User

```
yarn sequelize-cli model:generate --name User --attributes username:string
```

### Entry

```
yarn sequelize-cli model:generate --name Entry --attributes title:string,body:string,date:date,belongs_to:string
```

## Migraciones

[1] - [0.5 por cada uno]

```
yarn sequelize-cli db:migrate
```

### Seeds

```
yarn sequelize-cli seed:generate --name seed-users
yarn sequelize-cli seed:generate --name seed-entries
```

## Bibliografia

```
# Coloca aquí la bibliografía
# Esto incluye el uso de IA, sitios web, etc.
```
