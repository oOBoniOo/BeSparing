<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./imgs/piggy.png" alt="Project logo"></a>
</p>

<h3 align="center">BeSparing</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues]()]()
[![GitHub Pull Requests]()]()
[![License]()](/LICENSE)

</div>

---

<p align="center"> Control your daily expenses, don't waste your money!
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This is my web development bootcamp's final prjoct.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Bla bla bla
```

### Installing

A step by step series of examples that tell you how to get a development env running.

```
bla bla bla
```

## 🔧 Running the tests <a name = "tests"></a>

### Break down into end to end tests

```
bla bla bla
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 🎈 API <a name="usage"></a>

Dispondremos de los siguientes endpoints:

CRUD `Comunidades autonomas`:

- `GET /api/aut`: Lista todas las comunidades autonomas
- `GET /api/aut?queryparams`: Detalle de una única comunidad autonoma


CRUD `provincias`:

- `GET /api/prov`: Lista todas las provincias
- `GET /api/prov?queryparams(codigo/nombre)`: Detalle de una única provincia
- `GET /api/prov/porautonomia`: Detalle de una provincias por autonomia



CRUD `municipios`:

- `GET /api/mun`: Lista todas las provincias
- `GET /api/mun/porprovincia?prov`: Municipios por autonomia
- `GET /api/mun/porautonomia?aut`: Municipios por provincia

CRUD `cars`:

- `GET /api/marcas`: Lista todas las marcas
- `GET /api/modelos?marca`: Lista todas los modelos de una marca
- `GET /api/generaciones?marca&modelo`: Lista todas las generaciones de un modelo
- `GET /api/versiones?marca&modelo&generacion`: Lista todas las versionesde una generacion
- `GET /api/onecar?marca&modelo&generacion&version`: Lista un vehiculo.
- `POST /api/update`: Actualiza los datos de un vehiculo


CRUD `stations`:

- `GET /api/stations?long&lat`: Gasolineras cercanas a un punto.


CRUD `users`:

- `GET /api/user`: Lista todos los users
- `GET /api/user/:id_`: Detalle de un user
- `POST /api/user/add`: Crea un user
- `POST /api/user/update/:id_`: Actualiza un user
- `DELETE /api/user/delete/:id_`: Elimina un user

## 🎈 Usage <a name="usage"></a>

....................................

## 🚀 Deployment <a name = "deployment"></a>

```
bla bla bla
```

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Fastify](https://www.fastify.io/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [React](https://es.reactjs.org/) -
- [NextJs](https://nextjs.org/) - React Framework

## ✍️ Authors <a name = "authors"></a>

- [@oobonioo](https://github.com/oOBoniOo) - Idea & Initial work

See also the list of [contributors](https://github.com/oobonioo/) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
-
- [![Status](https://brand.corecode.school/logos/logo_core_wide.svg)](https://www.corecode.school/)
