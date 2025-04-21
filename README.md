# Task List App

A simple task management application built with React, Zustand, and React Query. This app allows users to manage tasks, including adding, updating, and deleting tasks, with a focus on modularity, state management, and API interactions.

---

## Features

- Add, update, and delete tasks.
- Mark tasks as completed.
- Manage tasks with a clean and reusable component-based architecture.
- State management using **Zustand** for client-side state and **React Query** for server-side state.
- API integration for fetching, updating, and deleting tasks.

---

## Architectural Choices

### Component-Based Architecture

The app is built using a component-based architecture, where each feature is encapsulated in its own reusable component. For example:

- `Task`: Represents an individual task.
- `TaskList`: Manages and renders a list of tasks.
- `DeleteTask`: Handles task deletion with confirmation dialogs.

This modular approach promotes reusability and maintainability.

### State Management

The app uses a combination of **React Query** and **Zustand** for state management:

- **React Query**:
  - Manages server-side state, such as fetching, caching, and updating tasks from the API.
  - Simplifies API interactions and ensures data consistency across the app.
- **Zustand**:
  - Manages global client-side state, such as dialog visibility and task updates.
  - Provides a lightweight and flexible API for managing UI state.

---

## Trade-Offs

1. **React Query vs. Zustand for Server State**:

   - **Decision**: React Query was chosen for server-side state management instead of Zustand.
   - **Trade-Off**: While React Query simplifies API interactions, it adds an additional dependency. Zustand could have been used for both server and client state, but React Query's caching and automatic refetching features made it a better fit for server-side state.

2. **Component Reusability vs. Complexity**:

   - **Decision**: Components like `Task` and `DeleteTask` were designed to be reusable.
   - **Trade-Off**: This required additional props and state management logic, slightly increasing complexity.

3. **Lightweight State Management**:

   - **Decision**: Zustand was chosen over Redux for simplicity.
   - **Trade-Off**: Zustand lacks some advanced features like middleware and devtools out of the box, which Redux provides. However, this was acceptable for a smaller app.

4. **Testing Coverage**:
   - **Decision**: Focused on testing critical user interactions (e.g., task updates, deletions).
   - **Trade-Off**: Some edge cases (e.g., invalid API responses) may not be fully covered in tests due to time constraints.

---

## API Documentation

The app interacts with a REST API to fetch, update, and delete tasks.

### Endpoints

#### 1. Get All Tasks

- **Endpoint**: `GET /tasks`
- **Description**: Fetches all tasks from the server.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "text": "Sample Task",
      "completed": false,
      "deleted": false,
      "createdAt": "2025-02-03T12:00:00Z"
    }
  ]
  ```

#### 2. Update a Task

- **Endpoint**: `PUT /tasks/:id`
- **Description**: Updates a task with the given ID.
- **Request Body**:
  ```json
  {
    "text": "Updated Task",
    "completed": true
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "text": "Updated Task",
    "completed": true,
    "deleted": false,
    "createdAt": "2025-02-03T12:00:00Z"
  }
  ```

#### 3. Delete a Task

- **Endpoint**: `DELETE /tasks/:id`
- **Description**: Deletes a task with the given ID.
- **Response**:
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

## Testing

The app includes tests for critical user interactions, such as:

- Rendering tasks with the correct structure.
- Handling checkbox changes to mark tasks as completed.
- Preventing updates for deleted tasks.
- Opening and closing dialogs for task updates and deletions.

---

## How to Run the App

1. Clone the repository:

   ```bash
   git clone https://github.com/RamadanMohamd/todo-list
   cd todo-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Run tests:

   ```bash
   npm run test:watch
   ```

5. Run Storybook:
   ```bash
   npm run storybook
   ```
