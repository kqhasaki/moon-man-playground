import { Navigate, createBrowserRouter } from "react-router-dom";

import { EldenRingThemeProvider } from "./components/elden-ring/ThemeProvider";
import { RickAndMortyThemeProvider } from "./components/rick-and-morty/ThemeProvider";
import ArmorGallery from "./pages/elden-ring/ArmorGallery";
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
      <EldenRingThemeProvider>
        <WeaponGallery />
      </EldenRingThemeProvider>
    ),
  },
  {
    path: "/elden-ring/armors",
    element: (
      <EldenRingThemeProvider>
        <ArmorGallery />
      </EldenRingThemeProvider>
    ),
  },
  {
    path: "/elden-ring/bosses",
    element: (
      <EldenRingThemeProvider>
        <BossGallery />
      </EldenRingThemeProvider>
    ),
  },
]);
