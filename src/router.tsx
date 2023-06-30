import { createBrowserRouter } from "react-router-dom";
import LocationGallery from "./pages/LocationGallery";
import CharacterGallery from "./pages/CharacterGallery";

export default createBrowserRouter([
  {
    path: "/",
    element: <CharacterGallery />,
  },
  {
    path: "/locations",
    element: <LocationGallery />,
  },
]);
