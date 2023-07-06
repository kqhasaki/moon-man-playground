import { Image } from "@kqhasaki/birdperson";
import { ReactElement } from "react";

import { Weapon } from "../../../api/elden-ring/weapon";
import { makeStyles } from "../theme";

const useStyles = makeStyles()((theme) => ({
  cardWrapper: {
    boxSizing: "border-box",
    height: 640,
    width: 360,
    padding: 20,
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.paper,
    fontFamily: "serif",
    "& h3": {
      textAlign: "center",
      marginTop: 24,
      marginBottom: 20,
      color: theme.palette.text.gold,
      fontSize: 25,
    },
  },
  description: {
    margin: 0,
    height: "200px",
    width: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    fontSize: 18,
    lineHeight: 1.3,
  },
}));

type WeaponCardPropsType = {
  data: Weapon;
};

export function WeaponCard({ data }: WeaponCardPropsType): ReactElement {
  const { classes } = useStyles();

  return (
    <article className={classes.cardWrapper}>
      <Image
        src={data.image}
        alt={data.image}
        style={{
          width: "100%",
          height: "unset",
          aspectRatio: "1 / 1",
        }}
      />
      <h3>{data.name}</h3>
      <p className={classes.description}>{data.description}</p>
    </article>
  );
}
