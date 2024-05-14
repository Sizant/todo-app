## About the project

This assessment is for a TODO app, which is a simple tool designed to help us organize our tasks.

## Getting Started

1. Create an `.env` file and use your MongoDB connection.

   Example:

   ```
   MONGODB_URI = mongodb+srv://user:password@database1.7ky7dsx.mongodb.net/crud_db
   ```

2. Install the dependencies and run the development server using the following commands:

   ```
   npm i
   npm run dev
   ```

3. Open the hosted site on your browser.

   Default URL: [http://localhost:3000](http://localhost:3000)

## Functionality

1. **Authentication:** Users can securely sign in using email and password or register for a new account. Authentication ensures data integrity and user privacy across all app pages.

2. **Todos Page:** Once authenticated, users can manage their to-do lists. All created tasks are displayed for easy access.

3. **New Task:** Users can quickly add new tasks to their to-do lists.

4. **Edit Todo:** Users can easily update task details to match their needs.

5. **Delete Todo:** Users have the freedom to remove tasks from their lists as needed.

6. **Responsive Design:** The app is designed to be responsive and work seamlessly across different devices.

7. **Error Handling:** Proper error handling has been implemented throughout the app, providing helpful messages to users when something goes wrong.

## Routes

1. [Home Page](http://localhost:3000)

- This page is for signing in and signing up.

2. [Todos Page](http://localhost:3000/tasklist)

- On this page, all todos belonging to the logged-in user are displayed.
- You can perform various actions such as creating new todos, editing, and deleting existing ones.
