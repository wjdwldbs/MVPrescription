# MVPrescription

> This application is a prescription manager built with react-native, express server and mongoDB

## Table of Contents

1. [Demo](#demo)
2. [Usage](#usage)
3. [Requirements](#requirements)
4. [Development](#development)

## Demo <a name="demo"></a>

[![demo](https://img.youtube.com/vi/6LinjARIe8I/maxresdefault.jpg)](https://www.youtube.com/embed/6LinjARIe8I)

## Usage <a name="usage"></a>

### Server API

- /server/test : test channel
- /mvp/users/all : Supporting GET request only. Get all users' info (only name is provided so far)
- /mvp/user : Supporting GET, POST, DELETE request. Only one item will be returned for GET request. Username is required in params for GET & DELETE request. CAUTION: DELETE request will also remove all drug record related to the user
- /mvp/drugs : Supporting GET & DELETE request. Getting or deletting all drug records related to a specified user. The username must be provided in params.
- /mvp/drug : Supporting all CRUD requests. The drug name must be provided in params for GET, UPDATE and DELETE request. You can only post one item for each POST request

## Requirements <a name="requirements"></a>

You will need [Node.js](https://nodejs.org/en/) and [mongoDB](https://docs.mongodb.com/manual/administration/install-community/) installed on your system.

## Development <a name="development"></a>

## Installation & Setup <a name="installation"></a>

Get the code by cloning this repository using git:

```bash
git clone https://github.com/wjdwldbs/MVPrescription.git
```

From within the root directory:

Once cloned, open the terminal in the project directory and install dependencies locally using npm:

```bash
$ npm install
```

Seed data and start the server with:

```bash
$ npm start
```

Start the app with:

```bash
$ cd my-new-project/
$ npm start
```
