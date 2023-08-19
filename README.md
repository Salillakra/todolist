
# Todo List App using React.js, Vite, Tailwind CSS, and Local Storage

This is a simple Todo List app built using React.js, Vite, and Tailwind CSS. It allows you to create and manage your tasks by storing them in the browser's local storage.

## Features

- Add new tasks to the list.
- Mark tasks as completed.
- Delete tasks from the list.
- The todo items and their checked states are stored in local storage, so they persist across browser sessions.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)

## Getting Started

1. Clone this repository to your local machine.

```bash
   git clone https://github.com/Salillakra/todo.git
```

3. Install the project dependencies.
```bash
   npm install
```

4. Start the development server.

```bash
   npm run dev
```

   The app should now be running at [http://localhost:5173](http://localhost:5173).

## Technologies Used

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## How It Works

The app uses React components to manage the Todo List. The `localStorage` API is used to store and retrieve the todo items and their checked states, ensuring that they persist even after the browser is closed.

When you add a new todo item, it is stored in the local storage with a unique identifier. When you mark a todo item as completed or delete it, the corresponding changes are updated in the local storage.
