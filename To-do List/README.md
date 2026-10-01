# 📝 Interactive React Task Manager (To-Do List)

A modern, fast, and interactive **To-Do List application** built as part of my React core engineering foundations journey. This app shifts away from traditional, bulky setups to leverage a lightweight developer workflow, focusing on dynamic state manipulation and local browser data persistence.

---

## 🚀 Key Features

- **Controlled Form Input:** Captures and validates user text entries smoothly on every single keystroke.
- **Dynamic Array Rendering:** Transforms task data arrays dynamically into responsive UI elements using the `.map()` iterator pattern.
- **Interactive State Mutation:** Safely overrides single object properties (toggling complete) using the array spread operator (`...`) to preserve state immutability.
- **Clean Data Filtering:** Performs localized task removals via the `.filter()` method to ensure fast, non-blocking UI changes.
- **Derived Progress Stats:** Computes completed vs. total items dynamically on the fly during render cycles rather than multiplying state declarations.
- **Local Storage Memory Hook:** Implements persistent cache syncing using `useEffect` to safely back up task items across browser sessions and tab reloads.

---

## 🛠️ Built With

- **Frontend Library:** [React](https://react.dev)
- **Build Tool:** [Vite](https://vite.dev) (Ultra-fast Hot Module Replacement)
- **Styling Framework:** [Tailwind CSS](https://tailwindcss.com) (Utility-first framework)
- **Storage Engine:** Browser [Web Storage API / LocalStorage](https://mozilla.org)

---

## 💻 Getting Started & Local Setup

Follow these quick commands to clone and fire up the application inside your local development environment:

### 1. Clone the project repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL_HERE
cd name-of-your-project
```

### 2. Install all node packages & project dependencies

```bash
npm install
```

### 3. Start the local Vite development server

```bash
npm run dev
```

Once running, click the local link provided inside your terminal console—usually `http://localhost:5173`—to interact with the live application in your web browser!
