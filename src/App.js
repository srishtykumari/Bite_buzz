
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import {createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Header />
     <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
         element: <Body/>,
         errorElement: <Error />
      },
      {
        path:"/about",
         element: <About />,
         errorElement: <Error />
      },
      {
        path:"/contact",
        element: <Contact/>,  
        errorElement: <Error />
     }
    ],
    errorElement: <Error />
  },

])

function Root() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default Root;
