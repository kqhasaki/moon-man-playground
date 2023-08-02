import { Navigate, createBrowserRouter } from "react-router-dom";

import { EldenRingThemeProvider } from "./components/elden-ring/ThemeProvider";
import { RickAndMortyThemeProvider } from "./components/rick-and-morty/ThemeProvider";
import Layout from "./pages/common/Layout";
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
        <Layout>
          <CharacterGallery />
        </Layout>
      </RickAndMortyThemeProvider>
    ),
  },
  {
    path: "/rick-and-morty/locations",
    element: (
      <RickAndMortyThemeProvider>
        <Layout>
          <LocationGallery />
        </Layout>
      </RickAndMortyThemeProvider>
    ),
  },
  {
    path: "/elden-ring/weapons",
    element: (
      <EldenRingThemeProvider>
        <Layout>
          <WeaponGallery />
        </Layout>
      </EldenRingThemeProvider>
    ),
  },
  {
    path: "/elden-ring/armors",
    element: (
      <EldenRingThemeProvider>
        <Layout>
          <ArmorGallery />
        </Layout>
      </EldenRingThemeProvider>
    ),
  },
  {
    path: "/elden-ring/bosses",
    element: (
      <EldenRingThemeProvider>
        <Layout>
          <BossGallery />
        </Layout>
      </EldenRingThemeProvider>
    ),
  },
]);
