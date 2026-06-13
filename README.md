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

## Upcoming

* [ ] Part 3 — Data Modeling
* [ ] User Management
* [ ] Expense Management
* [ ] Categories and Budgets
* [ ] Reporting and Analytics
* [ ] Validation and Error Handling
* [ ] Testing
* [ ] API Documentation
* [ ] Production Readiness
