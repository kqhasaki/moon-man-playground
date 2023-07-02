import { createBrowserRouter, Navigate } from "react-router-dom";
import LocationGallery from "./pages/rick-and-morty/LocationGallery";
import CharacterGallery from "./pages/rick-and-morty/CharacterGallery";
import { RickAndMortyThemeProvider } from "./components/rick-and-morty/ThemeProvider";

export default createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/characters" replace />,
  },
  {
    path: "/characters",
    element: (
      <RickAndMortyThemeProvider>
        <CharacterGallery />
      </RickAndMortyThemeProvider>
    ),
  },
  {
    path: "/locations",
    element: (
      <RickAndMortyThemeProvider>
        <LocationGallery />
      </RickAndMortyThemeProvider>
    ),
  },
]);
