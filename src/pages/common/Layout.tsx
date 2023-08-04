import { ReactElement, ReactNode, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CSSObject } from "tss-react";

import { Theme } from "../../components/common/theme";
import { makeStyles as makeEldenRingStyles } from "../../components/elden-ring/theme";
import { makeStyles as makeRickAndMortyStyles } from "../../components/rick-and-morty/theme";
import eldenRingThumbnail from "../../resources/elden-ring-thumbnail.jpg";
import rickAndMortyThumbnail from "../../resources/rick-and-morty-thumbnail.jpeg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const commonStyles: (theme: Theme) => Record<string, CSSObject> = (theme) => ({
  pageWrapper: {
    display: "flex",
    width: "100%",
    height: "100vh",
  },
  navbar: {
    zIndex: 99,
    height: "100%",
    width: 400,
    background: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.sm]: {
      position: "absolute",
      width: "100%",
    },
  },
  content: {
    height: "100%",
    width: "100%",
    overflow: "auto",
  },
  navItem: {
    height: 100,
    width: "100%",
    display: "flex",
    position: "relative",
    borderBottom: `1px solid ${theme.palette.divider}`,
    cursor: "pointer",
    fontWeight: "bold",
    "& *": {
      transition: "200ms",
    },
    "&:hover": {
      background: theme.palette.background.primary,
      "& img": {
        filter: "brightness(70%)",
      },
    },
  },
  navPic: {
    height: "100%",
    aspectRatio: "1 / 1",
    "& > img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  navDesc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  indicator: {
    position: "absolute",
    right: "0.5rem",
    top: "0.5rem",
    height: "0.8rem",
    width: "0.8rem",
    zIndex: 10,
    background: theme.palette.background.primary,
    borderRadius: "50%",
  },
});

const useEldenRingStyles = makeEldenRingStyles()(commonStyles);
const useRickAndMortyStyles = makeRickAndMortyStyles()(commonStyles);

type LayoutPropsType = {
  children: ReactNode;
};

console.log(rickAndMortyThumbnail);
const routeItems: {
  path: string;
  image: string;
  name: string;
}[] = [
  {
    path: "/rick-and-morty/characters",
    image: rickAndMortyThumbnail,
    name: "Rick and Morty",
  },
  {
    path: "/elden-ring/weapons",
    image: eldenRingThumbnail,
    name: "Elden Ring",
  },
];

export default function Layout({ children }: LayoutPropsType): ReactElement {
  const { classes: eldenRingClasses } = useEldenRingStyles();
  const { classes: rickAndMortyClasses } = useRickAndMortyStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const classes = useMemo(() => {
    const { pathname } = location;
    if (pathname.startsWith("/rick-and-morty")) {
      return rickAndMortyClasses;
    }
    return eldenRingClasses;
  }, [eldenRingClasses, rickAndMortyClasses, location]);

  return (
    <main className={classes.pageWrapper}>
      <section className={classes.navbar}>
        <ul>
          {routeItems.map((item) => (
            <li
              className={classes.navItem}
              key={item.name}
              onClick={() => navigate(item.path)}
            >
              <div className={classes.navPic}>
                <img src={item.image} alt={item.image} />
              </div>
              <div className={classes.navDesc}>{item.name}</div>
              {location.pathname.includes(item.path) && (
                <div className={classes.indicator} />
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className={classes.content}>{children}</section>
    </main>
  );
}
