# Empório da Cerveja Dashboard

React project using TypeScript, Redux, Redux-Saga and Styled-Components, developed during Campinas Tech Talents bootcamp.
<br />
The application allows users to login, access dashboard and get different information according to their role (admin or editor).
<br />
Admin users are allowed to access "Usuários" page, add and delete users, while editor users are not. Admin users can add and delete products, but editor users can only add products. 
<br /> <br />
This application consumes a fake API (<a href="https://github.com/biagavirete/fake-api-emporio">fake-api-emporio</a>).
<br />

<p align="center"><img src="https://github.com/biagavirete/emporio-dashboard/blob/master/src/assets/gif-emporio-dashboard.gif" width="75%"></p>

<br />

:sparkles: **Bonus: while running the fake API you can see the products in the <a href="https://github.com/biagavirete/emporio_ecommerce">Empório da Cerveja</a> application, a beer ecommerce project built with React** :sparkles: 

## Getting started

**Running fake API**

> Cloning fake API repository:

```bash
$ git clone https://github.com/biagavirete/fake-api-emporio.git
$ cd fake-api-emporio
```

> Installing dependencies

```bash
$ yarn
```

> Running fake server

```bash
$ json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000
```

**Installing**
> Cloning the repository

```bash
$ git clone https://github.com/biagavirete/emporio-dashboard.git
$ cd emporio-dashboard
```

**Running**
> Installing dependencies

```bash
$ yarn
```

> Running React

```bash
$  yarn start
```

> Try it out!

Login as admin user | Login as editor user
------------ | -------------
email: helen@facebook.com | email: mauricio@google.com
password: 123123| password: 123123


## Built with

* TypeScript
* React
* Redux
* Redux-saga
* Axios
* React-router-dom
* Styled-components
