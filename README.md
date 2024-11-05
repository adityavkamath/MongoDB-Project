
# MongoDB Operations Project

This project demonstrates basic MongoDB operations by running them sequentially in a Node.js environment. It covers establishing a connection to MongoDB, inserting documents, reading documents, updating documents, and deleting documents. Each operation is implemented as a separate module, and they execute one after the other to showcase MongoDB CRUD functionality.

## Project Structure

The project contains five main MongoDB operations:
1. **Connection**: Connects to the MongoDB database.
2. **Insertion**: Adds new documents to a specified collection.
3. **Read**: Reads documents from the collection.
4. **Update**: Updates fields in specific documents.
5. **Deletion**: Deletes specified documents from the collection.

## Prerequisites

- **Node.js** (version 14 or higher) and **npm** installed.
- **MongoDB** installed and running locally or accessible via a URI.

## Setup

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd mongodb-operations-project
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

## Running the Project

In the project root directory, run the main script:
```bash
node app.js
```

Each operation will execute sequentially, with console output for each operation, showing the results of each CRUD operation.

