# Expense Tracker API

A production-oriented backend project built to learn backend engineering through hands-on development rather than tutorials.

The goal of this repository is not just to build an expense tracker, but to understand how backend systems evolve by solving one problem at a time.

## Tech Stack

* Node.js
* Express
* PostgreSQL
* Prisma

---

# Progress

## Part 1 — Project Initialization

### Objective

Build the smallest possible backend service that can start, accept requests, and support a productive development workflow.

### Why This Matters

Before authentication, databases, and business logic, every backend service must be able to start reliably and communicate that it is healthy.

### What Was Built

* Express server setup
* Health check endpoint
* Environment variable configuration using dotenv
* Nodemon for development workflow

### Concepts Explored

* Express fundamentals
* Request-response lifecycle
* Environment variables
* Health checks
* Development tooling

### Questions to Think About

* Why use Express instead of Node's HTTP module?
* What is the purpose of `package.json`?
* Why are environment variables important?
* Why use Nodemon only during development?
* What is the purpose of a health check endpoint?
* If you deployed this app to another machine, what would need to change?
* How does Express know which route handler to execute?

### Definition of Done

* [x] Server starts successfully
* [x] Health endpoint responds correctly
* [x] Port is configurable through environment variables
* [x] Nodemon restarts the server automatically
* [x] Changes are committed and pushed to GitHub

---

## Part 2 — Database Foundation

### Objective

Understand how backend applications persist data and establish the database infrastructure required for future development.

### Why This Matters

Without persistence, all application state disappears on restart. Databases allow applications to store, query, and relate data reliably.

### What Was Built

* PostgreSQL local setup
* Project database creation
* Prisma initialization
* Database connection configuration
* Initial migration exploration using Prisma diff

### Concepts Explored

* Relational databases
* ORMs
* Prisma architecture
* Database migrations
* Connection strings

### Questions to Think About

* Why use PostgreSQL instead of JSON files?
* Why does this project fit a relational database?
* What problem does Prisma solve?
* Is Prisma replacing PostgreSQL?
* What is an ORM?
* What is a migration?
* Why are migrations important in teams?
* What information does a database connection require?
* How can you verify that Prisma successfully communicated with PostgreSQL?
* What happens if two developers change the schema differently?

### Definition of Done

* [x] PostgreSQL is running locally
* [x] Project database exists
* [x] Prisma is initialized
* [x] Database connection is configured
* [x] Migration workflow is understood
* [x] Initial migration is generated
* [x] The purpose of each component is understood

---

## Part 3 — Domain Modeling and Schema Evolution

### Objective

Design the first version of the expense tracker's domain model and understand how application requirements translate into database structures.

### Why This Matters

Backend development isn't just about writing APIs. It starts with understanding the business domain and designing data models that accurately represent it.

### What Was Built

* Designed the initial User model.
* Designed the initial Expense model.
* Established a one-to-many relationship between Users and Expenses.
* Introduced enums for expense types.
* Added timestamps for system events.
* Used UUIDs as identifiers.
* Configured cascade deletion between Users and Expenses.
* Generated and inspected SQL migrations.
* Applied migrations using Prisma.
* Visualized the resulting database using Prisma Studio.

### Concepts Explored

* Domain modeling
* Primary keys
* UUIDs
* Unique constraints
* One-to-many relationships
* Foreign keys
* Referential actions
* Enums
* Decimal vs floating-point numbers for money
* Business events vs system events
* Schema evolution
* Prisma-to-SQL translation

### Questions to Think About

* Why choose UUIDs over sequential IDs?
* Why should money use Decimal instead of Float?
* Why does the foreign key live in Expense instead of User?
* Why is `expenseDate` different from `createdAt`?
* When is cascade delete appropriate?
* How does Prisma translate models into SQL constraints?
* What changes if categories are introduced later?

### Definition of Done

* [x] User model designed and implemented
* [x] Expense model designed and implemented
* [x] Relationship established
* [x] SQL migration generated and inspected
* [x] Migration applied to PostgreSQL
* [x] Database visualized using Prisma Studio
* [x] Design decisions understood and justified

---

## Part 4 — User Management APIs

### Objective

Expose the first business functionality of the expense tracker by allowing clients to create and retrieve users through HTTP APIs.

### Why This Matters

A backend becomes useful only when external clients can interact with it. This part introduced the complete request → validation → database → response lifecycle.

### What Was Built

* User creation endpoint
* Retrieve all users endpoint
* Retrieve user by ID endpoint
* Request body parsing using Express
* Duplicate email handling
* Basic application-level validation
* Error handling for database operations
* Manual API testing

### APIs Implemented

#### Create User

`POST /api/users`

Creates a new user.

Behavior:

* Requires `name` and `email`
* Rejects requests with missing fields
* Rejects duplicate email addresses
* Returns the newly created user

Status Codes:

* `201 Created`
* `400 Bad Request`
* `409 Conflict`
* `500 Internal Server Error`

---

#### Get All Users

`GET /api/users`

Returns all users currently stored in the system.

Behavior:

* Returns only user information
* Does not include expenses to avoid unnecessary data fetching

Status Codes:

* `200 OK`
* `500 Internal Server Error`

---

#### Get User By ID

`GET /api/users/:id`

Returns a specific user.

Behavior:

* Retrieves a user using their UUID
* Returns an error when the user does not exist

Status Codes:

* `200 OK`
* `404 Not Found`
* `500 Internal Server Error`

### Concepts Explored

* REST fundamentals
* HTTP methods
* Route parameters
* Request bodies
* JSON parsing
* HTTP status codes
* Prisma Client usage
* Application-level validation
* Duplicate resource handling
* Error handling
* Overfetching considerations
* Race conditions

### Questions to Think About

* Should validation happen in Express, Prisma, or the database?
* Is checking for duplicate emails before insertion enough?
* How should database constraint violations be handled?
* When should routes be separated into their own modules?
* What happens if two requests try to create the same user simultaneously?

### Definition of Done

* [x] Create user endpoint implemented
* [x] Get all users endpoint implemented
* [x] Get user by ID endpoint implemented
* [x] Duplicate email handling added
* [x] Appropriate status codes used
* [x] Endpoints manually tested
* [x] API behavior understood and justified

---