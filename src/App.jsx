
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import AddStudent from "./Components/AddStudent";
import StudentList from "./Components/StudentList";



const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, 
    children:[
      {path:"",element:<StudentList/>},
      {path:"addStudent",element:<AddStudent />},
      {path:"studentList" , element:<StudentList />}
    ]
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={myRouter} />
    </>
  )
}

export default App
