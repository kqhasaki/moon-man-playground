import { Navigate, createBrowserRouter } from "react-router-dom";

import { RickAndMortyThemeProvider } from "./components/rick-and-morty/ThemeProvider";
import BossGallery from "./pages/elden-ring/BossGallery";
import WeaponGallery from "./pages/elden-ring/WeaponGallery";
import CharacterGallery from "./pages/rick-and-morty/CharacterGallery";
import LocationGallery from "./pages/rick-and-morty/LocationGallery";

export default createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/rick-and-morty/characters" replace />,
  },
  {
    path: "/rick-and-morty/characters",
    element: (
      <RickAndMortyThemeProvider>
        <CharacterGallery />
      </RickAndMortyThemeProvider>
    ),
  },
  {
    path: "/rick-and-morty/locations",
    element: (
      <RickAndMortyThemeProvider>
        <LocationGallery />
      </RickAndMortyThemeProvider>
    ),
  },
  {
    path: "/elden-ring/weapons",
    element: (
      <RickAndMortyThemeProvider>
        <WeaponGallery />
      </RickAndMortyThemeProvider>
    ),
  },
  {
    path: "/elden-ring/bosses",
    element: (
      <RickAndMortyThemeProvider>
        <BossGallery />
      </RickAndMortyThemeProvider>
    ),
  },
]);
