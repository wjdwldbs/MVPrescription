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

| URL | Method | Success Response |
| --- | --- | --- |
| /mvp/users/all | GET | Returns a list of all users |
| /mvp/user | POST | Create a new user |
| /mvp/user/:id | GET | Returns a user |
| /mvp/user/:id | DELETE | Deletes a user and all information regarding the user including prescriptions |
| /mvp/drugs/:username | GET | Returns a user's list of prescriptions |
| /mvp/drugs/:username | DELETE | Deletes all prescriptions of a user |
| /mvp/drug | POST | Creates a prescription |
| /mvp/drug/:id | GET | Returns a prescription |
| /mvp/drug/:id | DELETE | Deletes a prescription |
| /mvp/drug/:id | PUT | Updates a prescription |

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
