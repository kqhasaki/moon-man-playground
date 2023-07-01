import { ReactElement } from "react";
import { Character } from "../../../api/rick-and-morty/character";
import { makeStyles } from "../theme";

const useStyles = makeStyles()((theme) => ({
  cardWrapper: {
    borderRadius: 10,
    width: 600,
    height: 240,
    background: theme.palette.background.paper,
    overflow: "hidden",
    display: "flex",
  },
  descWrapper: {
    padding: 16,
  },
  imageWrapper: {
    height: "100%",
    aspectRatio: 1,
    "& > img": {
      height: "100%",
    },
  },
  characterName: {
    fontSize: 20,
    fontWeight: "bold",
  },
}));

type CharacterCardPropsType = {
  character: Character;
};

export function CharacterCard({
  character,
}: CharacterCardPropsType): ReactElement {
  const { classes } = useStyles();

  return (
    <article className={classes.cardWrapper}>
      <div className={classes.imageWrapper}>
        <img src={character.image} alt={character.image} />
      </div>
      <div className={classes.descWrapper}>
        <div className={classes.characterName}>{character.name}</div>
      </div>
    </article>
  );
}
