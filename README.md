## Title

Colkie nestjs assignment 

## Description

This project includes tasks provided by Colkie. 

APIs needed for this task are as follows: 

  - Create a room
  - Add a user to a room
  - Send a message to a room
  - Get latest messages from a room


Code challange requisites are as follows: 

  - Create a service to expose a REST API using Typescript. Here at Colkie we use
  Nest.js framework.
  - Automated tests should be added to verify the correct behavior of the API.
  - Use a database of your choice (or no database at all if you prefer).
  - Bonus: Expose OpenAPI documentation.
  - Bonus: Dockerize your application.

List of tasks done: 
  - All apis that were needed
  - Create a service to expose a REST API using Typescript. Here at Colkie we use
  Nest.js framework. (Done)
  - Automated tests should be added to verify the correct behavior of the API. (Done)
  - Use a database of your choice (or no database at all if you prefer). (Done)
  - Bonus: Expose OpenAPI documentation. (Done)
  - Bonus: Dockerize your application. (Done)


Decisions made while doing this project: 

  - Used Nestjs as asked to create REST APIs
  - Used sequelize as ORM for creating models
  - Splitted schema in four sections: 
    - User
      - Module which has api to create a user (Added feature)
    - Room
      - Module which has api to create a room
    - Room User
      - Module which has api to add user to a room
    - Room Message
      - Module which has api to add messages to a room and get latest messages by providing a sortBy parameter
  - Integrated OpenApi. Schema is avalailable in [root](http://ec2-3-86-216-242.compute-1.amazonaws.com) endpoint
  - Added e2e tests for existing apis and created a separate database for their data
  - Deployed the app on AWS EC2 instance
  - Created and RDS Postgres DB on AWS for both app and tests. It is on free tier so speed of the app might be slow
  - Containerized the app using docker and it is built with docker on the server
  - Used Nginx to map requests to docker app

## Usage

You can directly access the app from [ec2 link](http://ec2-3-86-216-242.compute-1.amazonaws.com). 

You can access OpenApi docs from [here](http://ec2-3-86-216-242.compute-1.amazonaws.com)

## Running the app

```bash

# watch mode
$ npm run start:dev

```

## Test

```bash

# e2e tests
$ npm run test:e2e

```

## Summary

This is an app built with Nestjs which implements a basic chat room. It uses sequelize as ORM, Jest as testing framework, OpenApi for api documentation, EC2 for app deployment, RDS for database and docker for containerization. 




