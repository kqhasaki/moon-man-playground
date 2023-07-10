import { Image } from "@kqhasaki/birdperson";
import { ReactElement, useCallback, useRef } from "react";

import { Weapon } from "../../../api/elden-ring/weapon";
import { makeStyles } from "../theme";

const useStyles = makeStyles()((theme) => ({
  cardWrapper: {
    boxSizing: "border-box",
    height: 400,
    width: 360,
    color: theme.palette.text.secondary,
    fontFamily: "serif",
    perspective: 1000,
  },
  inner: {
    "& h3": {
      textAlign: "center",
      marginTop: 24,
      marginBottom: 20,
      color: theme.palette.text.gold,
      fontSize: 25,
    },
    border: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.paper,
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.5s",
    transformStyle: "preserve-3d",
  },
  description: {
    height: "100%",
    width: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    fontSize: 20,
    lineHeight: 1.3,
    display: "flex",
  },
  front: {
    position: "absolute",
    width: "100%",
    height: "100%",
    "-webkit-backface-visibility": "hidden",
    backfaceVisibility: "hidden",
    padding: 20,
  },
  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    "-webkit-backface-visibility": "hidden",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    padding: 20,
  },
  imageWrapper: {
    height: "unset",
    width: "90%",
    aspectRatio: "1 / 1",
    margin: "auto",
  },
}));

type WeaponCardPropsType = {
  data: Weapon;
};

export function WeaponCard({ data }: WeaponCardPropsType): ReactElement {
  const { classes } = useStyles();
  const inner = useRef<HTMLDivElement>(null);

  const turnBack = useCallback(() => {
    if (!inner.current) {
      return;
    }
    inner.current.style.transform = "rotateY(180deg)";
  }, []);

  const turnFront = useCallback(() => {
    if (!inner.current) {
      return;
    }
    inner.current.style.transform = "";
  }, []);

  return (
    <article className={classes.cardWrapper} onMouseLeave={turnFront}>
      <section className={classes.inner} ref={inner}>
        <div className={classes.front}>
          <div className={classes.imageWrapper} onMouseEnter={turnBack}>
            <Image
              src={data.image}
              alt={data.image}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <h3>{data.name}</h3>
        </div>

        <div className={classes.back}>
          <h3>{data.name}</h3>
          <p className={classes.description}>{data.description}</p>
        </div>
      </section>
    </article>
  );
}
