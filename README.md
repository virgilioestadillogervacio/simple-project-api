# Simple Project API


A very simple Rest API implementation for building a simple project management using  Express Framework.

## Libraries and tools used

* [Node](https://www.npmjs.com/package/node)
* [Express](https://www.npmjs.com/package/express)
* [MongoDB](https://www.npmjs.com/package/mongodb)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [Redis](https://www.npmjs.com/package/redis)
* [Nodemailer](https://www.npmjs.com/package/nodemailer)
* [Migrate-Mongo](https://www.npmjs.com/package/migrate-mongo)

## API Docs
* [ROLES & PERMISSIONS](api-docs/ROLES_AND_PERMISSIONS.md)
* [HTTP REQUEST & RESPONSE](api-docs/index.md)

## Getting Started

#### Clone this repository and install dependencies

```bash
> git clone git@github.com:virgilioestadillogervacio/simple-project-api.git
> cd simple-project-api
> yarn install
```

#### Run application in development
```bash
> yarn run dev
```

#### Run application in production
```bash
> yarn start
```

#### Lint
```bash
> yarn run lint
```

#### Database seeder

```bash
> yarn run seed:create
> yarn run seed:drop
```
#### Migration File

```bash
> yarn run migrate-mongo create <your_migration_filename>
> yarn run migrate-mongo up
> yarn run migrate-mongo down
```
