# 📋 Task Manager — React + TypeScript Productivity App

[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

An interactive, responsive task management and workflow scheduling application built with **React 18**, **TypeScript**, and **Vite**.

---

## ✨ Features

- 📝 **Task Management**: Create, edit, complete, and filter tasks seamlessly.
- ⏰ **Reminders & Alerts**: Built-in reminder component (`Reminder.tsx`) for tracking approaching deadlines.
- 💾 **Local Storage Persistence**: Modular state persistence layer (`src/utils/localStorage.ts`) ensuring zero data loss on refresh.
- ⚡ **Fast Vite Build System**: Lightning-fast Hot Module Replacement (HMR) powered by Vite.

---

## 📁 File Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── TaskManager.tsx    # Parent wrapper component
│   │   ├── TaskList.tsx       # Filterable list component
│   │   ├── TaskItem.tsx       # Individual task item card
│   │   ├── TaskForm.tsx       # Creation & edit form modal
│   │   └── Reminder.tsx       # Notification and deadline reminder component
│   ├── utils/
│   │   └── localStorage.ts    # Browser local storage utilities
│   ├── App.tsx                # Main app layout
│   └── main.tsx               # React application mounting
├── index.html
└── vite.config.ts             # Vite configuration
```

---

## 🚀 Quickstart & Setup

### Prerequisites
- Node.js `18.x` or later
- `npm`

### Installation

```bash
# Clone the repository
git clone https://github.com/Sathyabalan6/task-manager.git
cd task-manager

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
