# React Learning Journey ⚛️

This repository contains my React learning journey, practice code, projects, and hands-on experiments.

I'm learning React by understanding the core concepts first and then applying them through practical projects.

---

# 📚 Topics Learned

## 1. React Basics

Learned the fundamentals of React and how React applications are structured.

* React project structure
* Components
* JSX
* Rendering components
* Component-based architecture

---

## 2. Components

Learned how to break a React application into reusable components.

### Functional Components

```jsx
function Welcome() {
  return <h1>Hello, Aman</h1>;
}
```

### Class Components

Also learned the basic concept and structure of class components.

---

## 3. JSX

Learned how JSX allows JavaScript and HTML-like syntax to be written together.

```jsx
const name = "Aman";

function App() {
  return <h1>Hello {name}</h1>;
}
```

Also practiced:

* JavaScript expressions inside JSX
* JSX attributes
* JSX elements
* Rendering dynamic values

---

## 4. Props

Learned how to pass data from a parent component to a child component.

```jsx
function Product({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>₹{price}</p>
    </div>
  );
}
```

Props are useful for making components reusable and allowing components to receive external data.

---

## 5. Conditional Rendering

Learned how to render different UI depending on a condition.

```jsx
function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  );
}
```

Practiced:

* Ternary operator
* Conditional rendering with `&&`
* Rendering different components based on state/conditions

---

## 6. List Rendering

Learned how to render multiple elements from an array using `map()`.

```jsx
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];

function Products() {
  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}
```

---

## 7. Keys

Learned why React requires a `key` when rendering lists.

```jsx
{products.map((product) => (
  <Product
    key={product.id}
    name={product.name}
  />
))}
```

Keys help React identify individual elements when a list changes.

---

# 🧠 React State & Hooks

## 8. `useState`

Learned how to create and manage component state using `useState`.

```jsx
const [count, setCount] = useState(0);
```

Practiced:

* Creating state
* Updating state
* Using state in JSX
* Handling user interactions with state
* Managing local component state

---

## 9. `useEffect`

Learned how to perform side effects in React.

```jsx
useEffect(() => {
  // side effect
}, []);
```

Used/understood `useEffect` for situations such as:

* API requests
* Running code after rendering
* Responding to state changes
* Working with external data

---

## 10. Context API

Learned the basic concept of React Context for sharing data between components without passing props through every intermediate component.

Main concepts:

* Creating context
* Providing context
* Consuming context
* Sharing data between components

---

## 11. Component Communication

Learned how components communicate with each other.

Practiced concepts such as:

* Parent → child using props
* Sharing state
* Passing functions through props
* Managing data between components

---

# 🌐 API & Data Handling

## 12. Working with APIs

Learned how React applications can communicate with external APIs.

Practiced working with:

* `fetch`
* Axios
* API responses
* Loading data into components
* Rendering API data

Example:

```jsx
const response = await axios.get(API_URL);
const data = response.data;
```

---

## 13. Data Normalization / Transformation

Learned how to transform API responses into the structure required by the application.

For example, if an API returns:

```js
{
  name: "Aman",
  age: 24,
  phone: "9999999999",
  email: "aman@gmail.com"
}
```

but the application only needs:

```js
{
  name: "Aman",
  age: 24,
  email: "aman@gmail.com"
}
```

I can transform the API response before using it in the React application.

---

# 🧭 React Router

## 14. React Router

Learned and practiced client-side routing.

Used concepts such as:

* Routes
* Route configuration
* Navigation
* Multiple pages/views
* React Router in projects

Example structure:

```text
/
├── Home
├── About
├── Products
└── Contact
```

---

# 💾 Browser Storage

## 15. localStorage

Learned how to use browser `localStorage` with React applications.

Practiced storing and retrieving application data.

```js
localStorage.setItem("user", JSON.stringify(user));

const user = JSON.parse(
  localStorage.getItem("user")
);
```

Used localStorage for things such as:

* Persisting data
* Watchlists
* Application state
* User-related preferences

---

# 🎨 Styling

## 16. Component Styling

Practiced styling React components using CSS and component-based styling approaches.

---

## 17. Tailwind CSS

Used Tailwind CSS while building React interfaces.

Practiced:

* Utility classes
* Layout
* Flexbox
* Spacing
* Typography
* Responsive design
* Buttons
* Cards
* Navigation bars
* Forms

---

# 🛠️ React Tools & Libraries

I've also worked with React applications using:

* Axios
* React Router
* Tailwind CSS
* localStorage
* ApexCharts
* EmailJS
* External APIs

---

# 🚀 Practical Projects

I've applied my React knowledge in several practical projects.

## MarketPulse

A stock/market-related React project.

Worked with concepts such as:

* React components
* API integration
* Axios
* React Router
* localStorage
* Watchlists
* Stock data
* Charts
* Portfolio-related UI

---

## DocterSheet

A doctor-finder React application.

Practiced:

* React components
* Search/filter UI
* React Router
* Tailwind CSS
* React Hook Form
* EmailJS
* External data
* Background slideshow
* Reusable UI components

---

## News Application

Built a React-based news application with categories such as:

* Sports
* Entertainment
* Stocks

Also practiced:

* API integration
* React components
* Bootstrap
* Dark mode
* Pagination/navigation

---

# 🧪 Learning Approach

For each React topic, I practice by:

1. Learning the concept
2. Understanding how it works
3. Solving small coding exercises
4. Building practical UI
5. Integrating the concept into projects
6. Reviewing and improving my code

---

# 📈 Progress

* [x] React Fundamentals
* [x] Project Structure
* [x] Components
* [x] Functional Components
* [x] Class Components
* [x] JSX
* [x] Props
* [x] Conditional Rendering
* [x] List Rendering
* [x] Keys
* [x] `useState`
* [x] `useEffect`
* [x] Context API
* [x] Component Communication
* [x] API Integration
* [x] Fetch
* [x] Axios
* [x] API Data Transformation
* [x] React Router
* [x] localStorage
* [x] Component Styling
* [x] Tailwind CSS
* [x] ApexCharts
* [x] EmailJS
* [ ] Custom Hooks
* [ ] Advanced State Management
* [ ] Performance Optimization
* [ ] Lazy Loading
* [ ] Error Boundaries
* [ ] Authentication
* [ ] Protected Routes
* [ ] React Testing

---

# 🎯 Current Goal

My goal is to become a **job-ready React / Full-Stack Developer** by strengthening my React fundamentals, building practical projects, and gradually moving toward advanced React and full-stack development.

**Status:** 🚀 Actively Learning React
