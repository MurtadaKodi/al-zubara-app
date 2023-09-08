import Home from "pages/home/Home";
import Root from "./pages/Root";
import Read from "pages/read/Read";
import NotFound from "./pages/Video";
import Northern from "pages/northern/Northern";
// import Gallerry from "pages/gallery/ReactImageGallery";
// import Images from "./images";



import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// @ts-ignore
import Gallery from "pages/gallery/Gallery";
import ReactImageGallery from "ReactImageGallery";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="read" element={<Read />} />
      <Route path="northern" element={<Northern />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="gallerry" element={<ReactImageGallery />} />





      <Route path="*" element={<NotFound />} />

    
    </Route>
  )
);


function App() {



  return (
  
      
      <RouterProvider router={router} />
      
  
  );
}

export default App;
