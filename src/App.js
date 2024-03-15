import "./App.css";
import Home from "./Pages/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Error from "./Components/Error";
// creating the two most important states in the main app file . and passing the states to the child components accordingly
function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/exercise/:id",
        element: <ExerciseDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);
