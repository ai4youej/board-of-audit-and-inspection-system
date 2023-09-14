# board-of-audit-and-inspection-system

KAIST board of audit and inspection system backend

## Dependency

-   `Node.js` and `Express.js`
-   `postgreSQL`
-   `Redis`
-   `sequelize` as a ORM

## Usage

Is it recommended to run with [Docker](https://www.docker.com/)

First off, setup .env with DB and S3 information.

```
mv .env.sample .env
```

For local execution, default environmental variables of database is as following:

```
DB_HOST = postgresql
DB_PORT = 5432
DB_USER = postgres
DB_PASSWORD = password
```

And, run with `docker compose` for production.

```
docker compose up
```

If you want to use `docker compose` for development purpose (it does not creates Node.js container), use following:

```
docker compose -f compose-dev.yaml up
npm run dev
```

## ER-Diagram

![감사원 drawio](images/감사원.drawio.png)
