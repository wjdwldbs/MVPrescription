# MVPrescription

> This repo is a prescription manager built with react-native, express server and mongoDB

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### Server API

- /server/test : test channel
- /mvp/users/all : Supporting GET request only. Get all users' info (only name is provided so far)
- /mvp/user : Supporting GET, POST, DELETE request. Only one item will be returned for GET request. Username is required in params for GET & DELETE request. CAUTION: DELETE request will also remove all drug record related to the user
- /mvp/drugs : Supporting GET & DELETE request. Getting or deletting all drug records related to a specified user. The username must be provided in params.
- /mvp/drug : Supporting all CRUD requests. The drug name must be provided in params for GET, UPDATE and DELETE request. You can only post one item for each POST request

## Requirements

- Node 6.13.0
- MongoDB

## Development

### Installing Dependencies and Start Server

From within the root directory:

```sh
npm install
npm start
```

For linux users:

```sh
sudo service mongod start
```
